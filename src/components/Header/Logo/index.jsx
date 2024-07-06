import React from 'react'
import header_logo from './assets/images/header_logo.png'
import styles from './style.module.scss'

const Logo = () => {
  return (
  <>
    <div className={styles.header-above}>
		<div className={styles.wrapper-header-inner}>
			<p className={styles.logo}><a href="#"><img src={header_logo} alt="Cheese Academy Tokyo"/></a></p>
			<button className={styles.btn-mobileMenu}>Menu</button>
			<nav className={styles.nav-outer}>
				<ul className={styles.nav-clearfix}>
					<li className={styles.nav-item}><a href="#about">About</a></li>
					<li className={styles.nav-item}><a href="#course">Course</a></li>
					<li className={styles.nav-item}><a href="#news">News</a></li>
					<li className={styles.nav-item}><a href="#access">Access</a></li>
					<li className={styles.nav-item}><a href="#contact">Contact</a></li>
				</ul>
			</nav>
		</div>
	</div>
 </>
  )      
}

export default Logo;
