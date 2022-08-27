import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "../../components/dashboard/Table";
import styles from "./user.module.css";
const Users = () => {
  // For Dismiss Button with Alert
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/user/getAll").then((res) => {
      console.log("res", res);
      setUsers(res.data);
    });
  }, []);

  return (
    <main className={styles.container}>
    <div className={styles.wrapper}>
    <Table data={users} rowsPerPage={10}/>
    </div>
    </main>
  );
};

export default Users;
