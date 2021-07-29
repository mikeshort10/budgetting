/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUntitledModelInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelUntitledModelConditionInput = {
  and?: Array< ModelUntitledModelConditionInput | null > | null,
  or?: Array< ModelUntitledModelConditionInput | null > | null,
  not?: ModelUntitledModelConditionInput | null,
};

export type UntitledModel = {
  __typename: "UntitledModel",
  id: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUntitledModelInput = {
  id: string,
  _version?: number | null,
};

export type DeleteUntitledModelInput = {
  id: string,
  _version?: number | null,
};

export type CreateFundingScheduleInput = {
  id?: string | null,
  name: string,
  savingFrequency: SavingFrequency,
  startDate: string,
  lastSaveDate?: string | null,
  _version?: number | null,
};

export enum SavingFrequency {
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
}


export type ModelFundingScheduleConditionInput = {
  name?: ModelStringInput | null,
  savingFrequency?: ModelSavingFrequencyInput | null,
  startDate?: ModelStringInput | null,
  lastSaveDate?: ModelStringInput | null,
  and?: Array< ModelFundingScheduleConditionInput | null > | null,
  or?: Array< ModelFundingScheduleConditionInput | null > | null,
  not?: ModelFundingScheduleConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelSavingFrequencyInput = {
  eq?: SavingFrequency | null,
  ne?: SavingFrequency | null,
};

export type FundingSchedule = {
  __typename: "FundingSchedule",
  id: string,
  name: string,
  savingFrequency: SavingFrequency,
  startDate: string,
  lastSaveDate?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateFundingScheduleInput = {
  name?: string | null,
  savingFrequency?: SavingFrequency | null,
  startDate?: string | null,
  lastSaveDate?: string | null,
  _version?: number | null,
};

export type DeleteFundingScheduleInput = {
  id: string,
  _version?: number | null,
};

export type CreateExpenseInput = {
  id?: string | null,
  name: string,
  amount: number,
  currentValue: number,
  spendingFrequency: SpendingFrequency,
  spendFrom?: string | null,
  lastFundDate?: string | null,
  _version?: number | null,
};

export enum SpendingFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  BIWEEKLY = "BIWEEKLY",
  MONTHLY = "MONTHLY",
  BIMONTHLY = "BIMONTHLY",
  TRIMONTHLY = "TRIMONTHLY",
  SEMIANNUALLY = "SEMIANNUALLY",
  ANNUALLY = "ANNUALLY",
}


export type ModelExpenseConditionInput = {
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  currentValue?: ModelFloatInput | null,
  spendingFrequency?: ModelSpendingFrequencyInput | null,
  spendFrom?: ModelStringInput | null,
  lastFundDate?: ModelStringInput | null,
  and?: Array< ModelExpenseConditionInput | null > | null,
  or?: Array< ModelExpenseConditionInput | null > | null,
  not?: ModelExpenseConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelSpendingFrequencyInput = {
  eq?: SpendingFrequency | null,
  ne?: SpendingFrequency | null,
};

export type Expense = {
  __typename: "Expense",
  id: string,
  name: string,
  amount: number,
  currentValue: number,
  spendingFrequency: SpendingFrequency,
  spendFrom?: string | null,
  fundingSchedule?: FundingSchedule | null,
  lastFundDate?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateExpenseInput = {
  name?: string | null,
  amount?: number | null,
  currentValue?: number | null,
  spendingFrequency?: SpendingFrequency | null,
  spendFrom?: string | null,
  lastFundDate?: string | null,
  _version?: number | null,
};

export type DeleteExpenseInput = {
  id: string,
  _version?: number | null,
};

export type ModelUntitledModelFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelUntitledModelFilterInput | null > | null,
  or?: Array< ModelUntitledModelFilterInput | null > | null,
  not?: ModelUntitledModelFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelUntitledModelConnection = {
  __typename: "ModelUntitledModelConnection",
  items?:  Array<UntitledModel | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelFundingScheduleFilterInput = {
  name?: ModelStringInput | null,
  savingFrequency?: ModelSavingFrequencyInput | null,
  startDate?: ModelStringInput | null,
  lastSaveDate?: ModelStringInput | null,
  and?: Array< ModelFundingScheduleFilterInput | null > | null,
  or?: Array< ModelFundingScheduleFilterInput | null > | null,
  not?: ModelFundingScheduleFilterInput | null,
};

export type ModelFundingScheduleConnection = {
  __typename: "ModelFundingScheduleConnection",
  items?:  Array<FundingSchedule | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelExpenseFilterInput = {
  name?: ModelStringInput | null,
  amount?: ModelFloatInput | null,
  currentValue?: ModelFloatInput | null,
  spendingFrequency?: ModelSpendingFrequencyInput | null,
  spendFrom?: ModelStringInput | null,
  lastFundDate?: ModelStringInput | null,
  and?: Array< ModelExpenseFilterInput | null > | null,
  or?: Array< ModelExpenseFilterInput | null > | null,
  not?: ModelExpenseFilterInput | null,
};

export type ModelExpenseConnection = {
  __typename: "ModelExpenseConnection",
  items?:  Array<Expense | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type CreateUntitledModelMutationVariables = {
  input: CreateUntitledModelInput,
  condition?: ModelUntitledModelConditionInput | null,
};

export type CreateUntitledModelMutation = {
  createUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUntitledModelMutationVariables = {
  input: UpdateUntitledModelInput,
  condition?: ModelUntitledModelConditionInput | null,
};

export type UpdateUntitledModelMutation = {
  updateUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUntitledModelMutationVariables = {
  input: DeleteUntitledModelInput,
  condition?: ModelUntitledModelConditionInput | null,
};

export type DeleteUntitledModelMutation = {
  deleteUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFundingScheduleMutationVariables = {
  input: CreateFundingScheduleInput,
  condition?: ModelFundingScheduleConditionInput | null,
};

export type CreateFundingScheduleMutation = {
  createFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFundingScheduleMutationVariables = {
  input: UpdateFundingScheduleInput,
  condition?: ModelFundingScheduleConditionInput | null,
};

export type UpdateFundingScheduleMutation = {
  updateFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFundingScheduleMutationVariables = {
  input: DeleteFundingScheduleInput,
  condition?: ModelFundingScheduleConditionInput | null,
};

export type DeleteFundingScheduleMutation = {
  deleteFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExpenseMutationVariables = {
  input: CreateExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type CreateExpenseMutation = {
  createExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateExpenseMutationVariables = {
  input: UpdateExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type UpdateExpenseMutation = {
  updateExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteExpenseMutationVariables = {
  input: DeleteExpenseInput,
  condition?: ModelExpenseConditionInput | null,
};

export type DeleteExpenseMutation = {
  deleteExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUntitledModelQueryVariables = {
  id: string,
};

export type GetUntitledModelQuery = {
  getUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUntitledModelsQueryVariables = {
  filter?: ModelUntitledModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUntitledModelsQuery = {
  listUntitledModels?:  {
    __typename: "ModelUntitledModelConnection",
    items?:  Array< {
      __typename: "UntitledModel",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUntitledModelsQueryVariables = {
  filter?: ModelUntitledModelFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUntitledModelsQuery = {
  syncUntitledModels?:  {
    __typename: "ModelUntitledModelConnection",
    items?:  Array< {
      __typename: "UntitledModel",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetFundingScheduleQueryVariables = {
  id: string,
};

export type GetFundingScheduleQuery = {
  getFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFundingSchedulesQueryVariables = {
  filter?: ModelFundingScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFundingSchedulesQuery = {
  listFundingSchedules?:  {
    __typename: "ModelFundingScheduleConnection",
    items?:  Array< {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncFundingSchedulesQueryVariables = {
  filter?: ModelFundingScheduleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFundingSchedulesQuery = {
  syncFundingSchedules?:  {
    __typename: "ModelFundingScheduleConnection",
    items?:  Array< {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetExpenseQueryVariables = {
  id: string,
};

export type GetExpenseQuery = {
  getExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListExpensesQueryVariables = {
  filter?: ModelExpenseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExpensesQuery = {
  listExpenses?:  {
    __typename: "ModelExpenseConnection",
    items?:  Array< {
      __typename: "Expense",
      id: string,
      name: string,
      amount: number,
      currentValue: number,
      spendingFrequency: SpendingFrequency,
      spendFrom?: string | null,
      lastFundDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncExpensesQueryVariables = {
  filter?: ModelExpenseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncExpensesQuery = {
  syncExpenses?:  {
    __typename: "ModelExpenseConnection",
    items?:  Array< {
      __typename: "Expense",
      id: string,
      name: string,
      amount: number,
      currentValue: number,
      spendingFrequency: SpendingFrequency,
      spendFrom?: string | null,
      lastFundDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateUntitledModelSubscription = {
  onCreateUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUntitledModelSubscription = {
  onUpdateUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUntitledModelSubscription = {
  onDeleteUntitledModel?:  {
    __typename: "UntitledModel",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFundingScheduleSubscription = {
  onCreateFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFundingScheduleSubscription = {
  onUpdateFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFundingScheduleSubscription = {
  onDeleteFundingSchedule?:  {
    __typename: "FundingSchedule",
    id: string,
    name: string,
    savingFrequency: SavingFrequency,
    startDate: string,
    lastSaveDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExpenseSubscription = {
  onCreateExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateExpenseSubscription = {
  onUpdateExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteExpenseSubscription = {
  onDeleteExpense?:  {
    __typename: "Expense",
    id: string,
    name: string,
    amount: number,
    currentValue: number,
    spendingFrequency: SpendingFrequency,
    spendFrom?: string | null,
    fundingSchedule?:  {
      __typename: "FundingSchedule",
      id: string,
      name: string,
      savingFrequency: SavingFrequency,
      startDate: string,
      lastSaveDate?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    lastFundDate?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
