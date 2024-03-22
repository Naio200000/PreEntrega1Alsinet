import PriceWidget from './PriceWidget'
import CartWidget from './CartWidget'

const MobileWidgets = () => {

    return (
        <nav className="fixed-bottom navbar d-block d-lg-none">
            <div className="minicarrito row align-items-center my-3">
                <div className="col">
                    <PriceWidget />
                </div>
                <div className="col">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default MobileWidgets