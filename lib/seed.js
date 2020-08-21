const moment = require("moments");
const getCases = require("./cases");
const countries = require("./lib/countries");

const baseURL =
  "https://github.com/CSSEGISandData/COVID-19/raw/master/csse_covid_19_data/csse_covid_19_daily_reports/08-19-2020.csv";

const dates = getDates();

function getDates() {
  const dates = [];
  const current = new Date();
  const startDate = new Date("2020-01-22");

  while (current >= startDate) {
    dates.push(startDate);

    const date = new Date(startDate);
    date.setDate(date.getDate() + 1);
    startDate = date;
  }

  return dates;
}
getDates();
