export type ReactFC<T> = (t: T) => JSX.Element | null;

export type ReactWrapper<T> = () => {};

export const savingFrequencies = ["WEEKLY", "BIWEEKLY", "MONTHLY"] as const;

export type SavingFrequency = typeof savingFrequencies[number];

export const spendingFrequencies = [
  "DAILY",
  ...savingFrequencies,
  "BIMONTHLY",
  "TRIMONTHLY",
  "SEMIANNUALLY",
  "ANNUALLY",
  "ONCE",
] as const;

export type SpendingFrequency = typeof spendingFrequencies[number];

export type FundingSchedule = {
  id: number;
  name: string;
  savingFrequency: SavingFrequency;
  startDate: Date;
  lastSaveDate: Date;
};

export type Expense = {
  id: number;
  name: string;
  amount: number;
  currentValue: number;
  spendingFrequency: SpendingFrequency;
  startDate: Date;
  spendFrom?: string;
  fundingSchedule?: FundingSchedule;
  lastFundDate: Date | null;
};
