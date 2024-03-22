import imagen1 from '../../assets/img/hero/komei-juku-hero-2.webp'
import imagen2 from '../../assets/img/hero/komei-juku-hero-3.webp'
import imagen3 from '../../assets/img/hero/komei-juku-hero-4.webp'
import CarrouselImgl from './CarrouselImg'

const Carrousel = () => {

    return (
        <div className="hero">
            <div id="CarrpuselHero" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <CarrouselImgl imagen={imagen1} />
                <CarrouselImgl imagen={imagen2} />
                <CarrouselImgl imagen={imagen3} />
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#CarrpuselHero" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#CarrpuselHero" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Proxima</span>
            </button>
            </div>
        </div>
    )
}

export default Carrousel