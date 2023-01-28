import Header from "./components/Header"
import banner from "/src/assets/banner-hero.png"

function App() {
  return (
    <div>
      <Header />
      <img src={banner} alt="banner hero" className="banner"/>
    </div>
  )
}

export default App
