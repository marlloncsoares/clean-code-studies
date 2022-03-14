let s = 0;
for (let j = 0; j < 34; j++) {
  s += (t[j]*4)/5;
}


let realDaysPerIdealDay = 4;
const WORK_DAYS_PER_WEEK = 5;
let sum = 0;

for (let j = 0; j < NUMBER_OF_TAKSS; j++) {
  const realTaskDays = taskEstimate[j] * realDaysPerIdealDay;
  const realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK) + 1;
  sum += realTaskWeeks;
}

