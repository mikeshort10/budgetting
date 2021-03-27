import React from "react";
import { Expense as E, FundingSchedule, spendingFrequencies } from "../types";
import { Input } from "./Input";
import { isSpendingFrequency } from "../src/utils";

type EditExpenseProps = E & {
  setExpense: (e: E) => void;
  closeModal: () => void;
  fundingSchedules: FundingSchedule[];
};

export const EditExpense = ({
  setExpense,
  closeModal,
  startDate = new Date(),
  fundingSchedules,
  ...expense
}: EditExpenseProps) => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const amountRef = React.useRef<HTMLInputElement>(null);
  const currentValueRef = React.useRef<HTMLInputElement>(null);
  const startDateRef = React.useRef<HTMLInputElement>(null);
  const spendingFrequencyRef = React.useRef<HTMLSelectElement>(null);
  const savingFrequencyRef = React.useRef<HTMLSelectElement>(null);

  return (
    <div className="bg-blue-100 px-10 py-5 w-full mt-4 flex flex-col">
      <Input label="Name" ref={nameRef} defaultValue={expense.name} />
      <Input label="Amount" ref={amountRef} defaultValue={expense.amount} />
      <Input
        label="Current Value"
        ref={currentValueRef}
        defaultValue={expense.currentValue}
      />
      <Input
        label="Start Date"
        ref={startDateRef}
        defaultValue={
          new Date(startDate) != startDate
            ? startDate?.toISOString().slice(0, 10)
            : ""
        }
        type="date"
      />
      <label className="w-full pt-2">
        Spending Frequency
        <select
          className="border border-blue-500 px-5 py-1 rounded w-full text-xl capitalize"
          style={{ backgroundColor: "inherit" }}
          defaultValue={expense.spendingFrequency}
          ref={spendingFrequencyRef}
        >
          {spendingFrequencies.map((frequency) => (
            <option key={frequency} value={frequency}>
              {frequency.toLowerCase()}
            </option>
          ))}
        </select>
      </label>
      <label className="w-full pt-2">
        Funding Schedule
        <select
          className="border border-blue-500 px-5 py-1 rounded w-full text-xl capitalize"
          style={{ backgroundColor: "inherit" }}
          defaultValue={expense.fundingSchedule?.id ?? fundingSchedules[0]?.id}
          ref={savingFrequencyRef}
        >
          {fundingSchedules.map((fundingSchedule) => (
            <option key={fundingSchedule.id} value={fundingSchedule.id}>
              {
                fundingSchedules.find(({ id }) => id === fundingSchedule.id)
                  ?.name
              }
            </option>
          ))}
        </select>
      </label>
      <div className="flex flex-col items-stretch w-full mt-4">
        <button
          className="bg-blue-800 text-white px-5 py-2 text-xl mb-2 shadow"
          onClick={() => {
            setExpense({
              ...expense,
              name: nameRef.current?.value ?? expense.name,
              amount: +(amountRef.current?.value ?? expense.amount),
              currentValue: +(
                currentValueRef.current?.value ?? expense.currentValue
              ),
              startDate: new Date(startDateRef.current?.value ?? startDate),
              spendingFrequency:
                spendingFrequencyRef.current &&
                isSpendingFrequency(spendingFrequencyRef.current.value)
                  ? spendingFrequencyRef.current.value
                  : expense.spendingFrequency,
              id: expense.id ?? Math.random(),
              fundingSchedule: fundingSchedules.find(
                ({ id }) => id === Number(savingFrequencyRef.current?.value)
              ),
            });
            closeModal();
          }}
        >
          Save
        </button>
        <button
          className="text-blue-800 bg-white px-5 py-2 text-xl mb-2 shadow"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
};
