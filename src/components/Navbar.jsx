import Logo from './Logo'
import Titulo from './Titulo'
import Nav from './Nav'

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
                        <div class=" text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                            <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                            </svg>
                            <span class="minicarrito-precio">0</span>
                        </div>
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