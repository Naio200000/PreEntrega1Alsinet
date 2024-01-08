import Productos from './Productos'

const Nav = () => {

    return (
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item"><a class="nav-link active text-center text-sm-end" aria-current="page" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link active text-center text-sm-end" aria-current="page" href="#">Nosotros</a></li>
            <li class="nav-item"><a class="nav-link active text-center text-sm-end dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Productos</a><Productos /></li>
            <li class="nav-item"><a class="nav-link active text-center text-sm-end" aria-current="page" href="#">Dojos</a></li>
        </ul>
    )
}

export default Nav