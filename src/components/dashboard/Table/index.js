import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useTable from "../hooks/useTable";
import styles from "./Table.module.css";
import TableFooter from "../tableFooter/TableFooter";
import Modal from "../../modal/Modal"
import { deletUser } from "../../../slices/userSlice";
import Viewuser from "../../Viewuser";
import Swal from "sweetalert2";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
  const dispatch = useDispatch();


  const handleDelete = (_id)=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletUser(_id))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
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
            onClick={()=> handleDelete(el._id)}
          >Delete
          </button>  <Viewuser/></td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
};

export default Table;