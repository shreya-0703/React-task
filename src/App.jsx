
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Speedcalc from './pages/Speedcalc'
import Cat from './pages/cat'




function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Speedcalc/>} />
       <Route path='/cat' element={<Cat/>} />

    </Routes>
    <Footer/>
    </>
  )
}

export default App
