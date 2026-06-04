import { Link, NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold text-gray-900 tracking-tight hover:text-brand-700 transition-colors"
        >
          <img src="https://a.academia-assets.com/images/academia-logo-redesign-2015.svg"
            alt="Logo"
            className="h-10 w-[145.2px]"
          />
        </Link>
        <div className="flex-1 w-full flex justify-center">
          <input type="text" placeholder="Buscar cursos..." className="w-96 p-1 border border-gray-300 rounded-md" />
        </div>
        <ul className="flex items-center gap-6 list-none m-0 p-0">
          <li>
            <NavLink to="/" end className={navLinkClass}>
              Cursos
            </NavLink>
          </li>
          <li>
            <NavLink to="/cursos/agregar" className={navLinkClass}>
              Agregar Curso
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
