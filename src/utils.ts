import {
  Expense as E,
  spendingFrequencies,
  SpendingFrequency,
  SavingFrequency,
  FundingSchedule,
} from "../types";
import * as A from "fp-ts/lib/Array";
import * as O from "fp-ts/lib/Option";
import { pipe } from "fp-ts/lib/function";

export { A, O, pipe };

export const isSpendingFrequency = (str: string): str is SpendingFrequency =>
  (spendingFrequencies as readonly string[]).includes(str);

const totalInExpenses = (expenses: E[]): number =>
  expenses.reduce((acc, expense) => acc + expense.currentValue, 0);

export const getSpendSafe = (totalInAccount: number, expenses: E[]) =>
  totalInAccount - totalInExpenses(expenses);

export const formatCurrency = (value: number) => "$" + value.toFixed(2);

export const getFrequency = (f: SavingFrequency) => {
  const enumToText: Record<SavingFrequency, string> = {
    WEEKLY: "Every Week",
    BIWEEKLY: "Every Other Week",
    MONTHLY: "Every Monthly",
  };
  return `Every ${enumToText[f]}`;
};

export const formatDate = (d: Date) =>
  d.toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: d.getFullYear() === new Date().getFullYear() ? undefined : "numeric",
  });

export const addDays = (days: number) => (date: Date) => {
  const dateCopy = new Date(date);
  date.setDate(date.getDate() + days);
  return dateCopy;
};

export const addMonths = (months: number) => (date: Date) => {
  const dateCopy = new Date(date);
  date.setMonth(date.getMonth() + months);
  return dateCopy;
};

export const getNextDate = (f: FundingSchedule) => {
  const enumToNum: Record<SpendingFrequency, (date: Date) => Date> = {
    DAILY: addDays(1),
    WEEKLY: addDays(7),
    BIWEEKLY: addDays(14),
    MONTHLY: addMonths(1),
    BIMONTHLY: addMonths(2),
    TRIMONTHLY: addMonths(3),
    SEMIANNUALLY: addMonths(6),
    ANNUALLY: addMonths(12),
    ONCE: (date) => date,
  };
  return enumToNum[f.savingFrequency](f.lastSaveDate);
};

export const nextSpend = (f: FundingSchedule, startDate: Date) => {
  console.log(startDate);
  if (new Date() < startDate) {
    return startDate;
  }
  return getNextDate(f);
};

export const removeAt = (i: number) => <A>(as: A[]) =>
  pipe(
    as,
    A.deleteAt(i),
    O.getOrElse(() => as),
    (x) => (console.log(x), x)
  );

export const changeExpenseKey = (expense: E, setExpense: (e: E) => void) => {
  return (key: keyof E) => {
    return (e: React.FocusEvent<HTMLInputElement>) =>
      setExpense({ ...expense, [key]: e.target.value });
  };
};
