import React, { useRef, useState } from "react";
import InputMask from "react-input-mask";
import DatePicker from "react-datepicker";
import pl from "date-fns/locale/pl";
import "react-datepicker/dist/react-datepicker.css";
import "./app.scss";

function App() {
  const [date, setDate] = useState();
  const [focused, setFocused] = useState(false);

  const inputDate = useRef();

  const handleDate = (e) => {
    setDate(e);
  };

  return (
    <div className="app-calendar_container">
      {!date && (
        <label
          htmlFor="date"
          className={`${focused ? "label_onFocused" : "label_onBlur"}`}
        >
          Od kiedy wolne
        </label>
      )}
      <DatePicker
        customInput={
          <InputMask mask="99.99.9999" maskPlaceholder="dd.mm.rrrr" />
        }
        ref={inputDate}
        dateFormatCalendar={"MMM yyyy"}
        selected={date}
        onChange={handleDate}
        dateFormat={"dd.MM.yyyy"}
        label="Od kiedy wolne"
        ariaLabelledBy="date_id"
        minDate={new Date("01-01-2020")}
        maxDate={new Date("12-31-2030")}
        name="date"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className={`${date && "clearInput"}`}
        locale={pl}
        formatWeekDay={(nameOfDay) =>
          nameOfDay === "poniedziałek"
            ? "Pn"
            : nameOfDay === "wtorek"
            ? "Wt"
            : nameOfDay === "środa"
            ? "Śr"
            : nameOfDay === "czwartek"
            ? "Cz"
            : nameOfDay === "piątek"
            ? "Pt"
            : nameOfDay === "sobota"
            ? "Sb"
            : nameOfDay === "niedziela"
            ? "Nd"
            : ""
        }
        renderCustomHeader={({
          monthDate,
          customHeaderCount,
          decreaseMonth,
          increaseMonth,
        }) => (
          <div>
            <button
              aria-label="Previous Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--previous"
              }
              onClick={decreaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                }
              >
                {"<"}
              </span>
            </button>
            <span
              className="react-datepicker__current-month"
              style={{ display: "flex" }}
            >
              {monthDate
                .toLocaleString("pl-Pl", {
                  month: "short",
                  year: "numeric",
                })
                .charAt(0)
                .toLocaleUpperCase() +
                monthDate
                  .toLocaleString("pl-Pl", {
                    month: "short",
                    year: "numeric",
                  })
                  .slice(1)}
            </span>
            <button
              aria-label="Next Month"
              className={
                "react-datepicker__navigation react-datepicker__navigation--next"
              }
              onClick={increaseMonth}
            >
              <span
                className={
                  "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                }
              >
                {">"}
              </span>
            </button>
          </div>
        )}
      />
    </div>
  );
}

export default App;
