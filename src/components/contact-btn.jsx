import { Link } from "react-router";


const ContactBtn = () => {
  
  return (
    <div className="space-y-4">
      <Link
        href="/contact"
        className="inline-block rounded-md py-4 px-8 text-xl font-bold bg-indigo-500 text-indigo-50"
        title="Anna Vediashkyna's contact botton"
      >
        Contact me
      </Link>
      
    </div>
  );
};
export default ContactBtn;
