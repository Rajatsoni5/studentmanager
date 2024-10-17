import React, { useState } from 'react';
import { useCart } from '../context/provideContext';
import NewStudentForm from './NewStudentForm';

function AddStudent() {

    const {addStudent} = useCart();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddStudent = (studentData) => {
        addStudent(studentData);
        setIsModalOpen(false); 
      };

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)}>Add New Student</button>
      {isModalOpen && (
        <div >
          <div >
            <span onClick={() => setIsModalOpen(false)}>&times;</span>
            <h2>Add Student</h2>
            <NewStudentForm onSubmit={handleAddStudent} />
          </div>
        </div>
      )}
      </div>
  )
}

export default AddStudent