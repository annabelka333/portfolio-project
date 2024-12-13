import CardProject from "../components/card-project";
import ContactBtn from "../components/contact-btn";
import ClipboardButton from "../components/copyclipboard";

const email = 'annabelka333@gmail.com';
const projects = [
  {
    id: 1,
    title: "Yogurt Project",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/yogurt.jpg",
  },
  {
    id: 2,
    title: "Weather App",
    description:
      "Built with a  responsive user interface.Integrated an external API to fetch real-time weather data based on   user input. Manage asynchronous API request and handeled errors to ensure smooth functionality. Focused on creating a clean and responsive UI for optimal user experience. ",
    image: "images/weatherApp.webp",
  },
  {
    id: 3,
    title: "Yoga App",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by",
    image: "images/yoga.jpg",
  },
];

//https://www.shecodes.io/graduates/79924-anna-vediashkyna

const Home = () => {
  // const handleCopyToClipboard = () => {
  //   const textToCopy = "annabelka333@gmail.com";
  //   navigator.clipboard.writeText(textToCopy)
  //     .then(() => alert("Copied to clipboard."))
  //     .catch((err) => console.error("Failed to copy text: ", err))
  // };
  return (
    <>
      <div className="bg-violet-50 text-center px-5 py-24">
        <p className="font-bold text-4xl">👋Hello, I am</p>
        <h1>Anna Vediashkyna</h1>
        <p className="font-bold mb-12 text-3xl">Front-end developer</p>
        <ContactBtn />
        <p className="mt-4 flex flex-row gap-4 justify-center itmes-center mb-12 text-2xl">
          <a href={`mailto:${email}`}
            className="">{email}</a>
          <ClipboardButton copy={email} />
        </p>
      </div>
      <div className="container mx-auto mb-16">
        <p className="font-serif text-2xl text-center m-12 font-bold ">
          Featured Project: My best project, chosen by me, to showcase.
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
