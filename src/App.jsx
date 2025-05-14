import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import ImageCard from './Home/ImageCard';
import Services from './Home/Services/Services';
import Hadder from './Navbar/Hadder';
import Order_Home from './Order/Order_Home';
import { ToastContainer } from 'react-toastify';
import Show_page from './Show_orders/Show_page';
import ShowDetail from './Show_orders/Order_details/ShowDetail';
import CancelPaymentPage from './Show_orders/Order_details/Container/CancelPaymentSection';

function App() 
{
  const shopInfo = {
    laundryName: "Mahawat Laundry",
    ownerName: "Samir Dev",
    laundryMobile: "7879243194",
    ownerPhone: "987654321",
    landmark: "Near Mr10 Squre",
    city: "Indore",
    pincode: "452010",
    state: "Madhya Pradesh",
    selectedPlan: "Premium Plan",
    services: [
      { name: "Washing", price: 200 },
      { name: "Dry Cleaning", price: 300 },
      { name: "Ironing", price: 100 },
    ],
  };
  // You can pass the shopInfo to the Header component if needed
  return (
    <Router> {/* ✅ ( BrowserRouter as Router) Wrap everything inside Router */}
      <>

       

        <Routes> {/* Routes for navigation */}

          <Route path="/" element={<> <Hadder shopInfo={shopInfo}/> <ImageCard /> <Services/></>} />
          <Route path='/order/:serviceId' element={<Order_Home/>}/>


          <Route path='/myorders' element={<Show_page/>}/>
          <Route path="/show_order_details/:name" element={<ShowDetail />} />

          <Route path='/cancel' element={<CancelPaymentPage/>}/>
          

        </Routes>
        
        <Navbar />

        <ToastContainer/>
      </>
    </Router>
  );
}

export default App;


