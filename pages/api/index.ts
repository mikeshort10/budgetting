import Amplify, { API, graphqlOperation } from "aws-amplify";
import { GraphQLResult } from "@aws-amplify/api-graphql";
import { NextApiHandler } from "next";
import { DataStore } from "@aws-amplify/datastore";
import awsconfig from "../../src/aws-exports";
import { FundingSchedule } from "../../src/models";
import { listFundingSchedules } from "../../src/graphql/queries";
import * as E from "fp-ts/lib/Either";
import * as O from "fp-ts/lib/Option";
import * as TE from "fp-ts/lib/TaskEither";
import * as A from "fp-ts/lib/Array";
import * as ROA from "fp-ts/lib/ReadonlyArray";
import * as R from "fp-ts/lib/Record";
import { isString } from "fp-ts/lib/string";
import { flow, identity, pipe } from "fp-ts/lib/function";
import * as Json from "fp-ts/lib/Json";
import { GraphQLError } from "graphql/error/GraphQLError";

Amplify.configure(awsconfig);

const isJsonArray = (json: Json.Json): json is Json.JsonArray =>
  Array.isArray(json);

const isJsonRecord = (json: Json.Json): json is Json.JsonRecord =>
  isJsonArray(json) && json instanceof Object;

type QueryConfig = { query: string; variables?: Json.JsonRecord };

const isQueryConfig = (json: Json.Json): json is QueryConfig =>
  isJsonRecord(json) &&
  isString(json.query) &&
  (isJsonRecord(json.variables) || json.variables === undefined);

const isGraphQLResult = <T, X>(
  x: X | GraphQLResult<T>
): x is GraphQLResult<T> =>
  (x as GraphQLResult<T>).data != null ||
  Array.isArray((x as GraphQLResult<T>).errors);

export const handler: NextApiHandler = async (req, res) => {
  const queries = pipe(
    req.body,
    E.fromNullable(Error("Missing body")),
    E.chain(Json.parse as (str: string) => E.Either<Error, Json.Json>),
    E.filterOrElse(isJsonRecord, () => Error("Body a valid Record")),
    E.map(
      flow(
        R.lookup("queries"),
        O.getOrElse((): Json.Json => [])
      )
    ),
    E.filterOrElse(isJsonArray, () => Error("Queries is not an Array")),
    E.map((qs) =>
      qs.map(
        E.fromPredicate(isQueryConfig, () => Error("Invalid Query Config"))
      )
    ),
    E.chain((x) => E.sequenceArray(x)),
    E.getOrElseW(identity)
  );

  if (queries instanceof Error) {
    console.error(queries.message);
    return res.send({ status: 400, statusText: queries.message });
  }

  const callQueries = pipe(
    queries,
    ROA.map(({ query, variables }) =>
      TE.of<Error, typeof API.graphql>(() =>
        API.graphql(graphqlOperation(query, variables))
      )
    ),
    TE.sequenceArray
  );

  const results = await callQueries();

  if (isGraphQLResult(x)) {
    if (x.errors) {
      x.errors.forEach((error) => console.error(error));
      return res.send({ status: 500, statusText: "Something went wrong" });
    }
    return res.send({ status: 200, data: x.data });
  }

  const response = { status: 200, statusText: "Hello" };
  // .then(() => res.send({ status: 200, statusText: "Hello" }))
  // .catch((e) => {
  //   console.error(e);

  //   res.send({ status: 500, statusText: "Something went wrong" });
  // });
};

export default handler;
