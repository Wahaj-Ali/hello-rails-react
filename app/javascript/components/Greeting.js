import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRandomMessage } from '../Redux/Messages/messagesReducer';

const Greeting = () => { 
  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => state.messages);

  useEffect(() => {
    dispatch(getRandomMessage());
  }, [dispatch]);
  
  return (
    <div className='container'>
      <h3>Greeting:{message}</h3>
    </div>
  );
}

export default Greeting;
