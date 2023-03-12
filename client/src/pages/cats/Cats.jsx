import { CatsList, Footer, Navbar } from 'layouts'
import React from 'react'
import "./cats.css"

const Cats = () => {
  return (
    <div className='cats'>
      <Navbar />
      <CatsList />
      <Footer />
    </div>
  )
}

export default Cats