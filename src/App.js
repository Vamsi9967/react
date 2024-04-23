import Header from './components/Header/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Header/home';
import About from './components/Header/about';
import Services from './components/Header/services';
import Contact from './components/Header/contact';
import  Payment  from './components/Header/payment';



function App() {
  return (

    <div >
      <Router>
      <Header/>
      
      
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' exact Component={About}/>
        <Route path='/services' exact Component={Services}/>
        <Route path='/contact' exact Component={Contact}/>
        <Route path='/payment' exact Component={Payment}/>

      
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
