import { Link, NavLink } from "react-router";

const menu = [
  {id: 1, url: '/', title: 'Home'},
  {id: 2, url: '/about', title: 'About'},
  {id: 3, url: '/projects', title: 'Projects'},
  {id: 4, url: '/contact', title: 'Contact'},
]

const Navbar = () => {
  return (
      <nav className="flex justify-between items-center py-5">
        <Link href="/" title="Homepage">
          <img
            src="/logo.png"
            className="max-w-36 block"
            alt="Anna Vediashkyna logo"
          />
        </Link>
        <ul className="flex flex-row gap-8">
          {
            menu.map(item => (
              <li key={item.id}>
                <NavLink to={item.url}  className={'transition-all text-black hover:text-indigo-500'} >{item.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </nav>
  )
}

export default Navbar;