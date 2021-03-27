import React from "react";
import { Expense as E } from "../types";
import { NextSpend } from "./NextSpend";

type ExpenseProps = E & {
  setExpense: (e: E) => void;
  editExpense: () => void;
  deleteExpense: () => void;
};

export const Expense = ({
  setExpense,
  editExpense,
  deleteExpense,
  ...expense
}: ExpenseProps) => {
  const { name, currentValue, amount, fundingSchedule } = expense;
  return (
    <div className="bg-blue-100 px-6 py-3 w-full rounded mt-3 shadow grid grid-columns-2 grid-flow-col">
      <div>
        <div className="flex justify-between w-full items-start">
          <h2 className="border-b border-blue-500 text-xl">{name}</h2>
        </div>
        <div className="mt-2 text-gray-700">
          <p>
            Value: ${currentValue.toFixed(2)} / ${amount.toFixed(2)}
          </p>
          <NextSpend
            fundingSchedule={fundingSchedule}
            startDate={expense.startDate}
          />
        </div>
      </div>
      <div className="flex flex-col items-end">
        <button className="mb-2 text-lg" onClick={editExpense}>
          Edit
        </button>
        <button className="mb-2 text-lg text-red-500" onClick={deleteExpense}>
          Delete
        </button>
      </div>
    </div>
  );
};
