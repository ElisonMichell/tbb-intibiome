import Card from "./components/Card"
import Header from "./components/Header"
import banner from "/src/assets/banner-hero.png"
import midbanner from "/src/assets/mid-banner.png"
import icons from "/src/assets/icons.png"
import productgreen from "/src/assets/product-green.png"
import productpink from "/src/assets/product-pink.png"
import productblue from "/src/assets/product-blue.png"
import photo1 from "/src/assets/photo-1.png"
import photo2 from "/src/assets/photo-2.png"
import photo3 from "/src/assets/photo-3.png"

function App() {
  return (
    <div className="home">
      <Header />
      <img src={banner} alt="banner hero" className="img-fill"/>
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

        <section className="list-section">
          <h2>our products</h2>
          <div className="list">
            <Card 
              photo={productblue} 
              description="intibiome wellness daily intimate wash"
              footer="wellness"
              color="blue"
            />
            <Card 
              photo={productgreen} 
              description="intibiome active extra protection intimate wash" 
              footer="active"
              color="green"
            />
            <Card 
              photo={productpink} 
              description="intibiome agecare dryness relief intimate wash" 
              footer="agecare"
              color="pink"
            />
          </div>
        </section>

        <section>
          <img src={midbanner} alt="banner" className="img-fill"/>
        </section>

        <section className="list-section">
          <h2>keep up to date with our discoveries</h2>
          <div className="list">
            <Card 
              photo={photo1} 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card 
              photo={photo2} 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            />
            <Card 
              photo={photo3} 
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
            />
          </div>
          <button className="button">see more</button>
        </section>
      </main>
    </div>
  )
}

export default App
