import './App.css'
import Navbar from './components/Navbar'
import Carrousel from './components/Carrousel'
import MobileWidgets from './components/MobileWidget'


function App() {


  return (
    <>
      <header className='header'>
        <Navbar />
        <Carrousel />
        <MobileWidgets />
      </header>
    </>
  )
}

export default App
