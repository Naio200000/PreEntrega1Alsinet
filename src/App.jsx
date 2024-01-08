import './App.css'
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import MobileWidgets from './components/MobileWidget'
import ItemListContainer from './components/ItemListContainer'


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
