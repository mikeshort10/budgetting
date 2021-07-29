import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum SavingFrequency {
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY"
}

export enum SpendingFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
  BIMONTHLY = "BIMONTHLY",
  TRIMONTHLY = "TRIMONTHLY",
  SEMIANNUALLY = "SEMIANNUALLY",
  ANNUALLY = "ANNUALLY"
}



type UntitledModelMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FundingScheduleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ExpenseMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class UntitledModel {
  readonly id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<UntitledModel, UntitledModelMetaData>);
  static copyOf(source: UntitledModel, mutator: (draft: MutableModel<UntitledModel, UntitledModelMetaData>) => MutableModel<UntitledModel, UntitledModelMetaData> | void): UntitledModel;
}

export declare class FundingSchedule {
  readonly id: string;
  readonly name: string;
  readonly savingFrequency: SavingFrequency | keyof typeof SavingFrequency;
  readonly startDate: string;
  readonly lastSaveDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<FundingSchedule, FundingScheduleMetaData>);
  static copyOf(source: FundingSchedule, mutator: (draft: MutableModel<FundingSchedule, FundingScheduleMetaData>) => MutableModel<FundingSchedule, FundingScheduleMetaData> | void): FundingSchedule;
}

export declare class Expense {
  readonly id: string;
  readonly name: string;
  readonly amount: number;
  readonly currentValue: number;
  readonly spendingFrequency: SpendingFrequency | keyof typeof SpendingFrequency;
  readonly spendFrom?: string;
  readonly lastFundDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Expense, ExpenseMetaData>);
  static copyOf(source: Expense, mutator: (draft: MutableModel<Expense, ExpenseMetaData>) => MutableModel<Expense, ExpenseMetaData> | void): Expense;
}