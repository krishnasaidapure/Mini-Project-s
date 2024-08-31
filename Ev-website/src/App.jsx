import { useEffect, useState } from 'react'
import Background from './Components/Background/Background.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';

function App() {
  let heroData = [
    {text1:"Dive into",text2:"What you love"},
    {text1:"Indulge",text2:"yor passion"},
    {text1:"Give in to",text2:"your passion"}
  ]
  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState("false");

  useEffect(() =>{
    setInterval(() => {
      setHeroCount((count) => {return count===2?0:count+1})
    },3000);
  },[])

  return (
<div>
  <Background playStatus={playStatus} heroCount={heroCount}/>
  <Navbar/>
  <Hero 
  setPlayStatus ={setPlayStatus}
  heroData = {heroData[heroCount]}
  heroCount = {heroCount}
  setHeroCount = {setHeroCount}
  playStatus = {playStatus}
  />
</div>
  )
}

export default App
