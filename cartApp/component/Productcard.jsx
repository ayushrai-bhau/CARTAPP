import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, } from '../features/cartSlice';
import{addToFav } from '../features/favSlice'

export default function App() {

  const items = useSelector((state)=>state.allCart.items)
  let dispatch = useDispatch();

  return (
  <div className='m-2'>
  
  <MDBContainer>
  <MDBRow className='mb-3'>
  {items.map((item) => (
            <MDBCol key={item.id} size="md">
              <MDBCard>
                <MDBCardImage src={item.img} position="top" alt="..." />
                <MDBCardBody>
                  <MDBCardTitle>{item.title}</MDBCardTitle>
                  <MDBCardText>{item.price}</MDBCardText>
                  <MDBBtn onClick={()=>dispatch(addToCart(item))} >
                    Add to Cart
                  </MDBBtn>
                  <MDBBtn onClick={()=>dispatch(addToFav(item))} >
                    favorite
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
    </MDBRow>
  </MDBContainer>
  </div>
  );
}