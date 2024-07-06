import React from 'react'
import styles from './style.module.scss'

const Title = () => {
  return (
    <>
    <div className={styles.main-visual}>
		<h1 className={styles.site-title}>セカイを変えるチーズを作ろう
		<span className={styles.site-title__sub}>チーズ職人養成学校「チーズアカデミーTOKYO」</span></h1>
    </div>
    </>
  );      
}

export default Title;