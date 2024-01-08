import imagen1 from '../assets/img/hero/komei-juku-hero-2.webp'
import imagen2 from '../assets/img/hero/komei-juku-hero-3.webp'
import imagen3 from '../assets/img/hero/komei-juku-hero-4.webp'

const Carrousel = () => {

    return (
        <div className="hero">
            <div id="CarrpuselHero" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={imagen1} className="d-block w-100" alt="Grupo de estdiantes de Iaido" />
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={imagen2} className="d-block w-100" alt="Banner de promocion para clases" />
                </div>
                <div className="carousel-item">
                    <img src={imagen3} className="d-block w-100" alt="Primer plano de persona a punto de desenvainar una katana" />
                </div>
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