import React from "react";

export function studentAvg(grades) {
  let sum = grades.reduce(function (prev, current) {
    return prev + parseInt(current);
  }, 0);

  const avg = sum / grades.length;
  return avg;
}
