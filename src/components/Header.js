import "bootstrap/dist/css/bootstrap.min.css"
import {useLocation, NavLink} from "react-router-dom"

function Header() {
    let location = useLocation();
    let currPath = location.pathname;

    return (
        <div class="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                <span class="fs-4">Andrew Salber</span>
                </a>
                
                <nav class="nav nav-pills">
                    <NavLink className={(currPath === "/about" || "/") && (currPath !== "/experience" && currPath !== "/projects") ? 'nav-link active' : 'nav-link'} aria-current={currPath === "/about" ? "page" : ""} to="/about">About</NavLink>
                    <NavLink className={currPath === "/experience" ? 'nav-link active' : 'nav-link'} aria-current={currPath === "/experience" ? "page" : ""} to="/experience">Experience</NavLink>
                    <NavLink className={currPath === "/projects" ? 'nav-link active' : 'nav-link'} aria-current={currPath === "/projects" ? "page" : ""} to="/projects">Projects</NavLink>
                </nav>

            </header>
        </div>
    )
}

export default Header;