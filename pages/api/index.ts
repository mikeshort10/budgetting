import Amplify from "aws-amplify";
import { NextApiHandler } from "next";
import { DataStore } from "@aws-amplify/datastore";
import awsconfig from "../../src/aws-exports";
import { FundingSchedule } from "../../src/models";

Amplify.configure(awsconfig);

export const handler: NextApiHandler = async (req, res) => {
  await DataStore.save(
    new FundingSchedule({
      name: "Initial Funding Schedule",
      startDate: "2021-07-30",
      savingFrequency: "BIWEEKLY",
    })
  )
    .then((message) => {
      console.info(message);
      console.info("Success!");
    })
    .catch((error) => {
      console.error(error);
      console.error("Error?!");
    });
  res.send({ status: 200, statusText: "Hello" });
};

export default handler;
