

const ItemListContainer = ({greeting}) => {

    return (
        <section className="home container-fluid container-md">
            <h2 className="titulo-seccion w-75 w-lg-100 text-uppercase text-center mt-2 mb-5 mx-auto px-2">{greeting}</h2>
        </section>
    )
}

export default ItemListContainer