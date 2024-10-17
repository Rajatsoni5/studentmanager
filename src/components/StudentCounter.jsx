import React from 'react'
import { useCart } from '../context/provideContext';

function StudentCounter() {

    const {count} = useCart();
    
  return (
    <div>
        <p>All Students : {count}</p>
    </div>
  )
}

export default StudentCounter