import React from "react";
import { formatDate, nextSpend } from "../src/utils";
import { FundingSchedule } from "../types";

type NextSpendProps = {
  fundingSchedule: FundingSchedule | null | undefined;
  startDate: Date;
};
export const NextSpend = ({ fundingSchedule, startDate }: NextSpendProps) => {
  console.log(fundingSchedule, startDate);
  if (fundingSchedule == null) {
    return null;
  }
  return <p>Save by {formatDate(nextSpend(fundingSchedule, startDate))}</p>;
};
