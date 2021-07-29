// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const SavingFrequency = {
  "WEEKLY": "WEEKLY",
  "BIWEEKLY": "BIWEEKLY",
  "MONTHLY": "MONTHLY"
};

const SpendingFrequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "BIWEEKLY": "BIWEEKLY",
  "MONTHLY": "MONTHLY",
  "BIMONTHLY": "BIMONTHLY",
  "TRIMONTHLY": "TRIMONTHLY",
  "SEMIANNUALLY": "SEMIANNUALLY",
  "ANNUALLY": "ANNUALLY"
};

const { UntitledModel, FundingSchedule, Expense } = initSchema(schema);

export {
  UntitledModel,
  FundingSchedule,
  Expense,
  SavingFrequency,
  SpendingFrequency
};