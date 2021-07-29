/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUntitledModel = /* GraphQL */ `
  query GetUntitledModel($id: ID!) {
    getUntitledModel(id: $id) {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listUntitledModels = /* GraphQL */ `
  query ListUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUntitledModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUntitledModels = /* GraphQL */ `
  query SyncUntitledModels(
    $filter: ModelUntitledModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUntitledModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFundingSchedule = /* GraphQL */ `
  query GetFundingSchedule($id: ID!) {
    getFundingSchedule(id: $id) {
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
export const listFundingSchedules = /* GraphQL */ `
  query ListFundingSchedules(
    $filter: ModelFundingScheduleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFundingSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncFundingSchedules = /* GraphQL */ `
  query SyncFundingSchedules(
    $filter: ModelFundingScheduleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFundingSchedules(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getExpense = /* GraphQL */ `
  query GetExpense($id: ID!) {
    getExpense(id: $id) {
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
export const listExpenses = /* GraphQL */ `
  query ListExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExpenses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        amount
        currentValue
        spendingFrequency
        spendFrom
        lastFundDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncExpenses = /* GraphQL */ `
  query SyncExpenses(
    $filter: ModelExpenseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExpenses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        amount
        currentValue
        spendingFrequency
        spendFrom
        lastFundDate
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
