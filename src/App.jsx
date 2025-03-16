import { useState } from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import ImageCard from './Home/ImageCard'
import Services from './Home/Services/Services'

function App() {
 

  return (
    <>
    <ImageCard/>
    <Services/>
    <Navbar/>
    </>
  )
}

export default App

{/* <div className='w-3xl grid-cols-3 grid  mx-auto'>
<img src="/Color_Laundry/Dry_clean.png" alt="" />
<img src="/Color_Laundry/Steam_press.png" alt="" />
<img src="/Color_Laundry/Normal_press.png" alt="" />
<img src="/Color_Laundry/Roll_press.png" alt="" />
<img src="/Color_Laundry/Laundry.png" alt="" />
<img src="/Color_Laundry/Stain_Remove.png" alt="" />
</div> */}