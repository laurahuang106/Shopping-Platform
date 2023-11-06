import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

function CartScreen() {
  const { id } = useParams(); 
  const location = useLocation();
  const qty = location.search ? Number(new URLSearchParams(location.search).get('qty')) : 1;
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;
  console.log('carItems', cartItems)

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);


  return (
    <div>
      Cart
    </div>
  );
}

export default CartScreen;
