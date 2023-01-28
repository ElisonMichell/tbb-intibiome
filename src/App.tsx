import Header from "./components/Header"
import banner from "/src/assets/banner-hero.png"
import icons from "/src/assets/icons.png"

function App() {
  return (
    <>
      <Header />
      <img src={banner} alt="banner hero" className="banner"/>
      <main>
        <section className="content-box">
          <h2>we’re here to help</h2>
          <p>
            When it comes to caring for our most intimate areas, we’ve lost our connection.
          </p><br/>
          <p>
            Embarrassed, unwilling, or unable to communicate with others, we’re needlessly 
            neglecting the parts of our bodies that need it most.
          </p><br/>
          <p>
            We’re here to help. 
            Providing you with the expertise, knowledge and products you need to feel 
            confident in your personal care.
          </p>
        </section>
        <img className="icons" src={icons} alt="promote, preserve and protect"/>
        <section className="content-box">
          <h2>whatever your age. whatever your lifestyle. whatever your interests.</h2>
          <p>
            Co-created with gynaecologists, our revolutionary products have been expertly 
            developed to support your intimate microbiome and pH balance, and strengthen 
            overall natural health.
          </p><br/>
          <p>
            As the experts in intimate hygiene, we want to bring 
            discussion about intimate wellness care out of the dark and demystify the 
            taboos that surround it.
          </p>
        </section>
      </main>
    </>
  )
}

export default App
