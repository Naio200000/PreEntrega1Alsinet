import './App.css'
import Navbar from './components/nav/Navbar'
import Carrousel from './components/hero/Carrousel'
import MobileWidgets from './components/nav/MobileWidget'
import ItemListContainer from './components/mainTienda/ItemListContainer'


function App() {


  return (
    <>
      <header className='header'>
        <Navbar />
        <Carrousel />
        <MobileWidgets />
      </header>
      <main>
        <ItemListContainer greeting={'Escuela de Iaido - Esgrima Samurai'} />
      </main>
    </>
  )
}

export default App
