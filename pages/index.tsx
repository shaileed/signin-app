import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Login from '../components/login'

const Home: NextPage = () => {
  return (
    <>
      <Login/>
    </>
  )
}

export default Home
