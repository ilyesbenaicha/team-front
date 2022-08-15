import React, { useState } from "react";

import useTable from "../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "../tableFooter/TableFooter";
import Modal from "../../modal/Modal"
const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  return (
    <>
   <Modal/>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Role</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Tel</th>
            <th className={styles.tableHeader}>Action</th>

          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.email}</td>
              <td className={styles.tableCell}>{el.role}</td>
              <td className={styles.tableCell}>{el.name}</td>
              <td className={styles.tableCell}>{el.tel}</td>
              <td className={styles.tableCell}> <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >Delete
          </button>  <button
            type="button"
            class="btn btn-info"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
           View
          </button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;