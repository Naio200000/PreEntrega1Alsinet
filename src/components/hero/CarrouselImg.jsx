

const CarrouselImg = ({imagen}) => {

    return (
        <div className="carousel-item active" data-bs-interval="10000">
            <img src={imagen} className="d-block w-100" alt="Grupo de estdiantes de Iaido" />
        </div>
    )
}

export default CarrouselImg