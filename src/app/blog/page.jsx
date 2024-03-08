import React from 'react'
import styles from './page.module.css'
import CardList from '../components/cardList/CardList'
import Menu from '../components/Menu/Menu'

const page = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Styles Blog of Rekless</h1>
        <div className={styles.content}>
            <CardList/>
            <Menu/>
            
        </div>

      
    </div>
  )
}

export default page
