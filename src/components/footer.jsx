import ContactBtn from "./contact-btn";
import {
  FacebookSvg,
  GitHubSvg,
  InstagramSvg,
  LinkedInSvg,
} from "./icons/icons";

const socialLinks = [
  {
    id: 1,
    url: "https://www.instagram.com/vediashkyna",
    icon: <InstagramSvg />,
  },
  {
    id: 2,
    url: "https://www.facebook.com/anna.vediashkyna",
    icon: <FacebookSvg />,
  },
  { id: 3, url: "https://www.github.com/vediashkyna", icon: <GitHubSvg /> },
  {
    id: 4,
    url: "https://www.instagram.com/vediashkyna",
    icon: <LinkedInSvg />,
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto pb-12">
      <div className="container mx-auto">
        <div className="bg-violet-50 py-8 px-20 flex justify-between items-center mb-12">
          <div className="">
            <h4>Work Inquiry</h4>
            <p className="text-muted">Let&apos;s work together</p>
          </div>
          <ContactBtn />
        </div>
        <div className="text-center mb-12">
          <a href="mailto:annabelka333@gmail.com" className="text-2xl">
            annabelka333@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              className="text-indigo-500 text-2xl inline-block rounded-full bg-violet-50 p-4"
              target="blank"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
