import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home from './Components/Home/Home';
import App from './App';
import Cart from './Components/Shop/ShopCart/Cart';
import Wishlist from './Components/Shop/Wishlist/Wishlist';
import ProductDetail from './Components/Shop/ProductDetails/ProductDetail';
import PaymentMethod from './Components/Shop/Payment/PaymentMethod';
import BillingDetails from './Components/Shop/BillingDetails/BillingDetails';
import Addresss from './Components/Shop/Address/Addresss';
import ShopGrid from './Components/Shop/ShopGrid/ShopGrid';
import ShopGrid4 from './Components/Shop/ShopGrid/ShopGrid4';
import ShopGrid5 from './Components/Shop/ShopGrid/ShopGrid5';
import Search from './Components/Shop/Search/Search';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Dashboard from './Components/Account/Dashboard/Dashboard';
import MyOrder from './Components/Account/Orders/MyOrder';
import MyProfile from './Components/Account/Profile/MyProfile';
import EditProfile from './Components/Account/Edit/EditProfile';
import Address from './Components/Account/Addresses/Address';
import LoginPart1 from './Components/Account/Login/LoginPart1';
import Registration from './Components/Account/Register/Registration';
import ResetPassword from './Components/Account/Password/ResetPassword';
import Blog from './Components/Blog/Blog';
import BlogRead from './Components/Blog/BlogRead';
import Privacy from './Components/Privacy/Privacy';
import Complaints from './Components/Complaints/Complaints';
import Faq from './Components/Faq/Faq';
import ByEmail from './Components/Account/Password/ByEmail';


const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/'element={<App />}>
    {/* nesting */}
    <Route path='/' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='wishlist' element={<Wishlist/>}/>
    <Route path='productdetails' element={<ProductDetail/>}/>
    <Route path='payment' element={<PaymentMethod/>}/>
    <Route path='billingdetails' element={<BillingDetails/>}/>
    <Route path='addresss' element={<Addresss/>}/>
    <Route path='shopgrid' element={<ShopGrid/>}/>
    <Route path='shopgrid4' element={<ShopGrid4/>}/>
    <Route path='shopgrid5' element={<ShopGrid5/>}/>
    <Route path='search' element={<Search/>}/>
    <Route path='about' element={<About/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='order' element={<MyOrder/>}/>
    <Route path='profile' element={<MyProfile/>}/>
    <Route path='Editprofile' element={<EditProfile/>}/>
    <Route path='address' element={<Address/>}/>
    <Route path='login' element={<LoginPart1/>}/>
    <Route path='registration' element={<Registration/>}/>
    <Route path='resetpassword' element={<ResetPassword/>}/>
    <Route path='blog' element={<Blog/>}/>
    {/* <Route path='blogRead' element={<BlogRead/>}/> */}
    <Route path='privacy' element={<Privacy/>}/>
    <Route path='Complaints' element={<Complaints/>}/>
    <Route path='faq' element={<Faq/>}/>
    <Route path='BlogRead' element={<BlogRead/>}/>
    <Route path='byemail' element={<ByEmail/>}/>
    

  </Route>
  
  )
)




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
);


reportWebVitals();
