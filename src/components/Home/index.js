import React, { useState } from 'react'
import Header from '../Header';
import Navbar from '../Navbar'
import Sidebar from '../SideBar'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Header />
    </>
  )
}

export default Home
