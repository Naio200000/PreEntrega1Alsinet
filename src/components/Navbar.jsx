import Logo from './Logo'
import Titulo from './Titulo'
import Nav from './Nav'
import PriceWidget from './PriceWidget'
import CartWidget from './CartWidget'

const Navbar = () => {

    return (
        <div>  
            <nav className="navbar navbar-expand-md fixed-top container-fluid x-auto ">
                <div className="nav container align-items-center">
                    <Logo />
                    <Titulo titulo={'Komei Juku'}/>
                    <button className="navbar-toggler ms-auto m-2" type="button" data-bs-toggle="collapse" data-bs-target="#ContenidoSoporteBarranNav" aria-controls="ContenidoSoporteBarranNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="order-md-last minicarrito d-none d-lg-flex justify-content-lg-evenly align-items-lg-center">
                        <PriceWidget />
                        <CartWidget />
                    </div>
                    <div className="collapse navbar-collapse ms-5" id="ContenidoSoporteBarranNav">
                        <Nav />
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar