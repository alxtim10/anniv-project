import First from "./first/First"
import Hero from "../../components/hero/Hero"
import Second from "./second/Second"
import './main.css'

const Main = () => {
  return (
    <section className="bg-[#e5e4e3] p-5">
      <Hero />
      <First />
      <Second />
    </section>
  )
}

export default Main