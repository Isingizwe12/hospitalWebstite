import Navbar from './components/navbar'
import './App.css'
import HomePage from './components/homePage'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import About from './components/about'
import DoctorsPage from './components/doctorsPage'
import Doctors from './components/doctors'

function App() {
  

  return (
    <Router>
       <Navbar />
      <Routes>
     <Route path='/' element={<HomePage/>}/>
     <Route path='/about' element={<About/>}/>
      <Route path='/doctors' element={<Doctors/>}/>

      </Routes>
    
      
    </Router>
  )
}

export default App
