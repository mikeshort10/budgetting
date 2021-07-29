/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUntitledModel = /* GraphQL */ `
  subscription OnCreateUntitledModel {
    onCreateUntitledModel {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUntitledModel = /* GraphQL */ `
  subscription OnUpdateUntitledModel {
    onUpdateUntitledModel {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUntitledModel = /* GraphQL */ `
  subscription OnDeleteUntitledModel {
    onDeleteUntitledModel {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFundingSchedule = /* GraphQL */ `
  subscription OnCreateFundingSchedule {
    onCreateFundingSchedule {
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
export const onUpdateFundingSchedule = /* GraphQL */ `
  subscription OnUpdateFundingSchedule {
    onUpdateFundingSchedule {
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
export const onDeleteFundingSchedule = /* GraphQL */ `
  subscription OnDeleteFundingSchedule {
    onDeleteFundingSchedule {
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
export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense {
    onCreateExpense {
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
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense {
    onUpdateExpense {
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
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense {
    onDeleteExpense {
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
