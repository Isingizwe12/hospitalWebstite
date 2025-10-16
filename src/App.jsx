import Navbar from './components/navbar'
import './App.css'
import HomePage from './components/homePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './components/about'
import Doctors from './components/doctors'
import Services from './components/services'

function App() {
  

  return (
    <Router>
       <Navbar />
     
     <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
      <Route path='/services' element={<Services/>}/>

      </Routes>
    
      
    </Router>
  )
}

export default App
