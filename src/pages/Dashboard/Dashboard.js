import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import styles from "./Dashboard.module.css"

const Dashboard = () => {
  const userData=useSelector((state)=>state.user.userData)
  const navigate=useNavigate()
  return (
  <>
    <Navbar/>
    <section className={styles.outerCont}>
      <h1 className={styles.welcomeText}>Welcome <span className={styles.name}>{userData?.name}</span></h1>
      <button onClick={()=>navigate("/editProfile")} className={styles.userProfileBtn}>Profile</button>
    </section>
  </>
  )
}

export default Dashboard