const currentYear = new Date().getFullYear();

const holidays = {
  0: {
    id: 0,
    name: "Day of Reconciliation",
    date: `16 December ${currentYear}`,
  },
  1: {
    id: 1,
    name: "Workers Day",
    date: new Date(`1 April ${currentYear}`),
  },
  2: {
    id: 2,
    name: "Day of Goodwill",
    date: new Date(`26 December ${currentYear}`),
  },
  3: {
    id: 3,
    name: "New Year Day",
    date: new Date(`1 January ${currentYear}`),
  },
  4: {
    id: 4,
    name: "Womens Day",
    date: new Date(`9 August ${currentYear}`),
  },
  5: {
    id: 5,
    name: "Heritage Day",
    date: new Date(`24 September ${currentYear}`),
  },
  6: {
    id: 6,
    name: "Christmas Day",
    date: new Date(`25 December ${currentYear} 13:25`),
  },
  7: {
    id: 7,
    name: "Youth Day",
    date: new Date(`16 June ${currentYear}`),
  },
  8: {
    id: 8,
    name: "Human Rights Day",
    date: new Date(`21 March ${currentYear}`),
  },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(
  holidays[futureId]
    ? holidays[futureId].name || `ID ${futureId} not created yet`
    : ""
);

copied = {...holidays[christmas]};
copied.name = "X-mas Day";
correctDate = new Date(copied.date);
correctDate.setHours(0, 0, 0, 0);

isEarlier = copied.date.getTime() < holidays[christmas].date.getTime();
console.log("New date is earlier:", isEarlier);

if (isEarlier) copied.date = correctDate; //Apply changes if the new date is earlier

if (isEarlier) copied.date = correctDate;
console.log("ID change:", copied.id !== holidays[christmas].id || copied.id);
console.log(
  "Name change:",
  copied.name !== holidays[christmas].name || copied.name
);
console.log(
  "Date change:",
  copied.date.getTime() !== holidays[christmas].date.getTime() || copied.date
);

const holidayTimestamps = Object.values(holidays).map(holiday =>
  new Date(holiday.date).getTime()
);

const firstHolidayTimestamp = Math.min(
  holidays[0].date.getTime(),
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);

const lastHolidayTimestamp = Math.max(
  holidays[0].date.getTime(),
  holidays[1].date.getTime(),
  holidays[2].date.getTime(),
  holidays[3].date.getTime(),
  holidays[4].date.getTime(),
  holidays[5].date.getTime(),
  holidays[6].date.getTime(),
  holidays[7].date.getTime(),
  holidays[8].date.getTime()
);

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1; //adding 1 to adjust for 0-based months
const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth() + 1;

console.log(
  `${String(firstDay).padStart(2, "0")}/${String(firstMonth).padStart(
    2,
    "0"
  )}/${currentYear}`
);

console.log(
  `${String(lastDay).padStart(2, "0")}/${String(lastMonth).padStart(
    2,
    "0"
  )}/${currentYear}`
);

const randomIndex = Math.floor(Math.random() * Object.keys(holidays).length);
const randomHoliday = holidays[randomIndex];
console.log(randomHoliday.date);
