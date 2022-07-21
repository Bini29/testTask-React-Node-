import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterData } from "../../store/Slice/TableSlice";
import style from "./FilterTable.module.css";

function FilterTable() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [filed, setField] = useState("name");
  const [condition, setcondition] = useState("2");

  useEffect(() => {
    dispatch(filterData({ field: filed, condition: condition, value: value }));
  }, [value]);

  return (
    <div className={style.filter}>
      <select
        onChange={(e) => {
          setField(e.target.value);
        }}
        defaultValue="name"
      >
        <option value="name" key="1">
          Название
        </option>
        <option value="amount" key="2">
          Количество
        </option>
        <option value="distance" key="3">
          Расстояние
        </option>
      </select>

      <select
        onChange={(e) => {
          setcondition(e.target.value);
        }}
      >
        <option value="1" key="1">
          Равно
        </option>
        <option value="2" key="2">
          Содержит
        </option>
        <option value="3" key="3">
          Больше
        </option>
        <option value="4" key="4">
          Меньше
        </option>
      </select>

      <input
        onChange={(e) => {
          setValue(e.target.value);
        }}
        value={value}
        type="text"
      />
    </div>
  );
}

export default FilterTable;
