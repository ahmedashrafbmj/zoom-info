import { Link } from 'react-router-dom'
import './style.css'
const Navbar = () => {
  return (

    <nav className="navbar navbar-expand-lg filter-navbar">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Web Scrapping</Link>

        <div className='search-link mr-auto px-3'>
          <Link to="/search">Advanced Search</Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link class="nav-link nav-link-ltr" to="#">Lists</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-link-ltr" to="#">Intent</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-link-ltr" to="#">Websights</Link>
            </li>

            <li class="nav-item">
              <Link class="nav-link nav-link-ltr" to="#">Tracker</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link nav-link-ltr" to="#">Work flows</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar