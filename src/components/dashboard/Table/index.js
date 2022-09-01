import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "../tableFooter/TableFooter";
import Modal from "../../modal/Modal"
import { deletUser } from "../../../slices/userSlice";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const dispatch = useDispatch();


  const handleDelete = (_id)=>{
    dispatch(deletUser(_id))
  }
  return (
    <>
   <Modal/>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Role</th>
            <th className={styles.tableHeader}>last name</th>
            <th className={styles.tableHeader}>First name</th>
            <th className={styles.tableHeader}>Department</th>
            <th className={styles.tableHeader}>Action</th>

          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr className={styles.tableRowItems} key={el.id}>
              <td className={styles.tableCell}>{el.email}</td>
              <td className={styles.tableCell}>{el.role}</td>
              <td className={styles.tableCell}>{el.last_name}</td>
              <td className={styles.tableCell}>{el.first_name}</td>
              <td className={styles.tableCell}>{el.department}</td>
              <td className={styles.tableCell}> <button
            type="button"
            class="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            onClick={()=> handleDelete(el.id)}
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