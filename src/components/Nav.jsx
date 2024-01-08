import Productos from './Productos'

const Nav = () => {

    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link active text-center text-sm-end" aria-current="page" href="#">Home</a></li>
            <li className="nav-item"><a className="nav-link active text-center text-sm-end" aria-current="page" href="#">Nosotros</a></li>
            <li className="nav-item"><a className="nav-link active text-center text-sm-end dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a><Productos /></li>
            <li className="nav-item"><a className="nav-link active text-center text-sm-end" aria-current="page" href="#">Dojos</a></li>
        </ul>
    )
}

export default Nav