import CardProject from "../components/card-project";
import ContactBtn from "../components/contact-btn";

const projects = [
  {
    id: 1,
    title: "Yogurt Project",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/yogurt.png",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/weather.png",
  },
  {
    id: 3,
    title: "Yoga App",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/yoga.png",
  },
];

//https://www.shecodes.io/graduates/79924-anna-vediashkyna

const Home = () => {
  return (
    <>
      <div className="hero bg-violet-50 text-center px-5 py-24">
        <p className="font-bold text-4xl">👋Hello, I am</p>
        <h1>Anna Vediashkyna</h1>
        <p className="font-custom mb-12 text-2xl">Front-end developer based in Spain</p>
        <ContactBtn />
      </div>
      <div className="container mx-auto mb-16">
        <p className="text-center m-12 font-bold">
          Featured Project which is my best project be choice be show
        </p>
        {projects.map((project) => (
          <CardProject
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
