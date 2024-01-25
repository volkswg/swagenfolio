import React, { useState } from "react";
import style from "./TimelineFilter.module.css";

const TimelineFilter = (props) => {
  const { defaultData, filterData, onChange } = props;
  const [selectedTimeline, setSelectedTimeline] = useState(defaultData);

  const changeFilterHandler = (data) => {
    setSelectedTimeline(data);
    onChange(data)
  };

  return (
    <div className={style.FilterContainer}>
      {filterData.map((e) => (
        <div
          className={[
            style.FilterButton,
            selectedTimeline === e ? style.Selected : null,
          ].join(" ")}
          onClick={() => {
            changeFilterHandler(e);
          }}
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default TimelineFilter;
