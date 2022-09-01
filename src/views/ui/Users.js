import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../components/dashboard/Table";
import styles from "./user.module.css";
import { useSelector,useDispatch } from "react-redux";
import { getUser } from "../../slices/userSlice";
const Users = () => {
  // For Dismiss Button with Alert


const dispatch = useDispatch()
const userState=useSelector((state)=>state.users)

  useEffect(() => {
dispatch(getUser())
  }, [dispatch]);

  return (
    <main className={styles.container}>
    <div className={styles.wrapper}>
    <Table data={userState.users} rowsPerPage={10}/>
    </div>
    </main>
  );
};

export default Users;
