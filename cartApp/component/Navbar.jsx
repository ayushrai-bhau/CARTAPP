import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';



export default function App() {
  const { cart, totalQuantity, totalPrice } = useSelector( (state)=>state.allCart);
  const dispatch = useDispatch();
  useEffect(()=>{ dispatch(getCartTotal())},[cart])
 
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
       <MDBNavbarBrand>Navbar</MDBNavbarBrand>
        <span>
          <Link to="/">All Product</Link>
        </span>
        <MDBBtn color='dark'>
          <Link to="/fav">favorite</Link>
          </MDBBtn>
        <MDBBtn color='dark'>
        <Link to='/cart'>Cart({cart.length})
        </Link>
        </MDBBtn>

     
      
      </MDBContainer>
    </MDBNavbar>
  );
}