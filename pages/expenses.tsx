import React from "react";
import { Expense as Exp, FundingSchedule } from "../types";
import { Expense } from "../components/Expense";
import { EditExpense } from "../components/EditExpense";
import { formatCurrency, getSpendSafe, removeAt } from "../src/utils";

const ExpensesPage = () => {
  const [totalInAccount, setTotalInAccount] = React.useState(950);
  const [showModal, setShowModal] = React.useState<number>();
  const [fundingSchedules, setFundingSchedules] = React.useState<
    FundingSchedule[]
  >([]);
  const [expenses, setExpenses] = React.useState<Exp[]>([]);

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);

  React.useEffect(() => {
    fetch("/api", {
      method: "POST",
      body: JSON.stringify({ queries: [{}] }),
    })
      .then((res) => res.json())
      .then(setExpenses);
  }, []);

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
      <div className="max-w-4xl mx-auto">
        <div
          className={`${
            showModal != null ? "" : "hidden"
          } fixed top-0 z-50 bg-blue-100 w-full max-w-5xl`}
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
    </div>
  );
};

export default ExpensesPage;
