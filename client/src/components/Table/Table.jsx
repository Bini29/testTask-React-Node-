import React, { useEffect, useMemo, useState } from "react";
import style from "./Table.module.css";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../store/Slice/TableSlice";
import { getData } from "../../api/getData";
import FilterTable from "../FilterTable/FilterTable";
import Pagination from "./Pagination";

function Table() {
  const tableDataFiltered = useSelector((state) => state.tableData.filterValue);
  const dispatch = useDispatch();
  const [curentPage, setCurentPage] = useState(5);
  const [tables, setTable] = useState([]);

  useEffect(() => {
    getData()
      .then((data) => {
        dispatch(setData(data));
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  useMemo(() => {
    setTable(tableDataFiltered.slice([curentPage - 5], [curentPage]));
  }, [tableDataFiltered, curentPage]);

  return (
    <div className={style.container}>
      <FilterTable />
      <table className={style.table}>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {tableDataFiltered.length ? (
            tables.map((i) => {
              return (
                <tr key={i.id}>
                  <td>{i.date}</td>
                  <td>{i.name}</td>
                  <td>{i.amount}</td>
                  <td>{i.distance}</td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td>"По заданному фильту элементы не найдены"</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className={style.pagination}>
        <Pagination
          count={tableDataFiltered.length}
          curentPage={setCurentPage}
          maxitem={5}
        />
      </div>
    </div>
  );
}

export default Table;
