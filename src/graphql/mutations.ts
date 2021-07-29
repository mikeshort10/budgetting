/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUntitledModel = /* GraphQL */ `
  mutation CreateUntitledModel(
    $input: CreateUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    createUntitledModel(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateUntitledModel = /* GraphQL */ `
  mutation UpdateUntitledModel(
    $input: UpdateUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    updateUntitledModel(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteUntitledModel = /* GraphQL */ `
  mutation DeleteUntitledModel(
    $input: DeleteUntitledModelInput!
    $condition: ModelUntitledModelConditionInput
  ) {
    deleteUntitledModel(input: $input, condition: $condition) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createFundingSchedule = /* GraphQL */ `
  mutation CreateFundingSchedule(
    $input: CreateFundingScheduleInput!
    $condition: ModelFundingScheduleConditionInput
  ) {
    createFundingSchedule(input: $input, condition: $condition) {
      id
      name
      savingFrequency
      startDate
      lastSaveDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateFundingSchedule = /* GraphQL */ `
  mutation UpdateFundingSchedule(
    $input: UpdateFundingScheduleInput!
    $condition: ModelFundingScheduleConditionInput
  ) {
    updateFundingSchedule(input: $input, condition: $condition) {
      id
      name
      savingFrequency
      startDate
      lastSaveDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteFundingSchedule = /* GraphQL */ `
  mutation DeleteFundingSchedule(
    $input: DeleteFundingScheduleInput!
    $condition: ModelFundingScheduleConditionInput
  ) {
    deleteFundingSchedule(input: $input, condition: $condition) {
      id
      name
      savingFrequency
      startDate
      lastSaveDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
      id
      name
      amount
      currentValue
      spendingFrequency
      spendFrom
      fundingSchedule {
        id
        name
        savingFrequency
        startDate
        lastSaveDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      lastFundDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
      id
      name
      amount
      currentValue
      spendingFrequency
      spendFrom
      fundingSchedule {
        id
        name
        savingFrequency
        startDate
        lastSaveDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      lastFundDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
      id
      name
      amount
      currentValue
      spendingFrequency
      spendFrom
      fundingSchedule {
        id
        name
        savingFrequency
        startDate
        lastSaveDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      lastFundDate
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
