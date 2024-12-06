
const Navbar = () => {
    return (
        <nav className="flex justify-between">
        <a href="/" title="Homepage">
            <img
                src="images/logo.png"
                className="logo"
                alt="Anna Vediashkyna logo"
            />
        </a>
        <ul className = "flex space-x-4">
            <li className="active">
                <a href="/" title="Homepage">Home</a>
            </li>
            <li>
                <a href="/about.html" title="about Anna Vediashkyna">About</a>
            </li>
            <li>
                <a href="/work.html" title="Anna Vediashkyna's work">Work</a>
            </li>
            <li>
                <a href="/contact.html" title="Anna Vediashkyna's contact"
                >Contact </a>
            </li>
        </ul>
    </nav>
    );
 };

export default Navbar; 
