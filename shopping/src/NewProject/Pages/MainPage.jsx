import React,{useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Collections from '../Components/Collections'
import Footer from '../Components/Footer'

import{child, gents, women } from '../data'
import Mencollection from '../Components/Mencollection'
import Womencollection from '../Components/Womencollection'



const MainPage = () => {

  const[childFashion, setchildFashion] =useState(child);
  const[gentsFashion, setgentsFashion] =useState(gents);
  const[womenFashion, setwomenFashion] =useState(women)
  
  return (
    <div>
      <Header />
      <Banner />
      <Collections  childFashion={childFashion}/>
      <Mencollection gentsFashion={gentsFashion}/>
      <Womencollection womenFashion={womenFashion}/>
      <Footer />
    </div>
  )
}

export default MainPage
