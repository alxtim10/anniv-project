import React from 'react'
import First from "./first/First"
import Hero from "../../components/hero/Hero"
import Second from "./second/Second"
import Third from "./third/Third"
import Fourth from './fourth/Fourth'
import Fifth from './fifth/Fifth'
import Sixth from './sixth/Sixth'

const Main = () => {
  return (
    <section className="bg-[#e5e4e3] p-5">
      <Hero />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
    </section>
  )
}

export default Main