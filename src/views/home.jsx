import { Link } from "react-router";
import CardProject from "../components/card-project";

const projects = [
  {
    id: 1,
    title: "Yogurt Project",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/yogurt1.png"
  },
  {
    id: 2,
    title: "Weather App",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/weather.png"
  },
  {
    id: 3,
    title: "Yoga App",
    description: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/yoga.png"
  },
]

const Home = () => {
  return(
    <>
     <div className="hero bg-indigo-500 text-center px-5 py-24">
      <p className="font-bold text-4xl">👋Hello, I am</p>
      <h1>Anna Vediashkyna</h1>
      <h2 className="font-custom">Front-end developer based in Spain</h2>
      <div>
        <Link
          href="/contact"
          className="btn btn-branding"
          title="Anna Vediashkyna's contact botton"
          >Contact me</Link>
        
      </div>
    </div>
    <p className="text-center m-5">
      Featured Project which is my best project be choice be show
    </p>
      {
        projects.map( project => (
          <CardProject 
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image} /> 
        ))
      }
 
    </>
   
  )
}

export default Home;