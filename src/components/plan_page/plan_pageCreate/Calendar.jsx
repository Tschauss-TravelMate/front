import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, forwardRef } from "react";
import styles from "./Calendar.module.css";
import { ko } from "date-fns/esm/locale"

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className={styles.input} onClick={onClick} ref={ref}>
          {value}
        </button>
      ));


    return (
      <div className={styles.Calendar_position}>
        <div>
        출발일 : {' '}
        <DatePicker
          locale={ko}
          selected={startDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          customInput={<CustomInput />}
        />
        </div>
        <div>
        도착일 : {' '}
        <DatePicker
          locale={ko}
          selected={endDate}
          dateFormat="yyyy-MM-dd"
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          customInput={<CustomInput />}
        />
        </div>
    </div>
    );
};

export default Calendar;