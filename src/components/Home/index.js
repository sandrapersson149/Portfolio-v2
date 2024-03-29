import React, { useState } from 'react'
import Header from '../Header';
import Navbar from '../Navbar'
import Sidebar from '../SideBar'
import Profile from '../Profile'
import Work from '../Work';
import Footer from '../Footer';
import Contact from '../Contact';

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
      <Profile />
      <Work />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
