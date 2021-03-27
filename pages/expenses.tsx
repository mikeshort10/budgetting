import React from "react";
import { Expense as E, FundingSchedule } from "../types";
import { Expense } from "../components/Expense";
import { EditExpense } from "../components/EditExpense";
import { formatCurrency, getSpendSafe, removeAt } from "../src/utils";

const ExpensesPage = () => {
  const [totalInAccount, setTotalInAccount] = React.useState(950);
  const [expenses, setExpenses] = React.useState<E[]>([]);
  const [showModal, setShowModal] = React.useState<number>();

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  const [fundingSchedules] = React.useState<FundingSchedule[]>([
    {
      id: Math.random(),
      name: "Payday",
      startDate: today,
      lastSaveDate: yesterday,
      savingFrequency: "BIWEEKLY",
    },
  ]);

  const addNewExpense = () => {
    setShowModal(expenses.length);
  };

  const setExpense = (i: number) => (e: E) =>
    setExpenses((es) => {
      const newEs = [...es.slice(0, i), e, ...es.slice(i + 1)];
      console.log(newEs);
      return newEs;
    });

  const deleteExpenseAt = (i: number) => () =>
    setExpenses(removeAt(i)(expenses));

  return (
    <div className="bg-gray-800 min-h-screen">
      <div
        className={`${
          showModal != null ? "" : "hidden"
        } fixed top-0 z-50 bg-blue-100 w-screen h-screen`}
      >
        {showModal != null && (
          <EditExpense
            closeModal={() => setShowModal(undefined)}
            key={expenses[showModal]?.id}
            {...expenses[showModal]}
            setExpense={setExpense(showModal)}
            fundingSchedules={fundingSchedules}
          />
        )}
      </div>
      <div className="px-4 py-2">
        <div className="my-3 rounded bg-blue-800 text-white py-4 px-8 text-right text-xl">
          Spend Safe: {formatCurrency(getSpendSafe(totalInAccount, expenses))}
          <p className="text-sm text-gray-300 pt-2">Money Out: $0.00</p>
        </div>

        {showModal == null &&
          expenses.map((expense, i) => {
            const deleteExpense = deleteExpenseAt(i);
            return (
              <Expense
                key={expense.id}
                {...expense}
                deleteExpense={deleteExpense}
                editExpense={() => setShowModal(i)}
                setExpense={setExpense(i)}
              />
            );
          })}
        <button
          type="button"
          onClick={addNewExpense}
          className="py-2 mt-3 w-full bg-blue-800 text-white"
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};

export default ExpensesPage;
