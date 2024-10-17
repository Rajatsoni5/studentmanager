import React from 'react'
import StudentCounter from './StudentCounter'
import AddStudent from './AddStudent'

function Homepage() {

  return (
    <div>
        <h1>Student Manager</h1>
        <StudentCounter />
        <AddStudent />
        
    </div>
  )
}

export default Homepage