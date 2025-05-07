import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import ImageCard from './Home/ImageCard';
import Services from './Home/Services/Services';
import Hadder from './Navbar/Hadder';
import Order_Home from './Order/Order_Home';
import { ToastContainer } from 'react-toastify';
import Show_page from './Show_orders/Show_page';

function App() {
  return (
    <Router> {/* ✅ ( BrowserRouter as Router) Wrap everything inside Router */}
      <>

       

        <Routes> {/* Routes for navigation */}

          <Route path="/" element={<> <Hadder /> <ImageCard /> <Services/></>} />
          <Route path='/order/:serviceId' element={<Order_Home/>}/>
          <Route path='/myorders' element={<Show_page/>}/>

        </Routes>
        
        <Navbar />

        <ToastContainer/>
      </>
    </Router>
  );
}

export default App;
