import PriceWidget from './PriceWidget'
import CartWidget from './CartWidget'

const MobileWidgets = () => {

    return (
        <nav class="fixed-bottom navbar d-block d-lg-none">
            <div class="minicarrito row align-items-center my-3">
                <div class="col">
                    <PriceWidget />
                </div>
                <div class="col">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default MobileWidgets