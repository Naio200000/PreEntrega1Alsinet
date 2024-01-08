import Logo from './Logo'
import Titulo from './Titulo'
import Nav from './Nav'
import PriceWidget from './PriceWidget'

const Navbar = () => {

    return (
        <div>  
            <nav class="navbar navbar-expand-md fixed-top container-fluid x-auto ">
                <div class="nav container align-items-center">
                    <Logo />
                    <Titulo titulo={'Komei Juku'}/>
                    <button class="navbar-toggler ms-auto m-2" type="button" data-bs-toggle="collapse" data-bs-target="#ContenidoSoporteBarranNav" aria-controls="ContenidoSoporteBarranNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="order-md-last minicarrito d-none d-lg-flex justify-content-lg-evenly align-items-lg-center">
                        <PriceWidget />
                        <div class="text-center"> 
                            <button type="button" class="btn btn-komei position-relative px-3" data-bs-toggle="modal" data-bs-target="#carritoModal">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                            </svg>
                            <span class="minicarrito-cantidad position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                0</span>
                            </button>
                        </div>
                    </div>
                    <div class="collapse navbar-collapse ms-5" id="ContenidoSoporteBarranNav">
                        <Nav />
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar