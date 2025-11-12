import React from 'react';
import './App.css';

const person = {
  name: 'ravi',
  id: '102',
  profession: 'IT',
  theme: {
    color: 'black'
  }
};

const person1 = {
  name: 'hari',
  id: '104',
  profession: 'civil',
  sal: [100, 200, 300],
  isFound: true,
  theme: {
    color: 'white'
  }
};

const person2 = {
  name: 'Gregorio',
  profession: 'IT',
  theme: {
    color: 'pink'
  }
};

const person3 = {
  name: 'Gregorio',
  profession: 'Mech',
  imageId: '7vOD0fP',
  imageSize: 's',
  theme: {
    color: 'palegreen'
  }
};

const baseUrl = 'https://tse4.mm.bing.net/th/id/OIP.5Qp2V7WQayY9pl6ZcFq_ZgHaHa?cb=ucfimgc2&rs=1&pid=ImgDetMain&o=7&rm=3';

const ObjPerson = () => {
  
  const imageUrl = `${baseUrl}${person3.imageId}${person3.imageSize}.jpg`;

  return (
    <div className="box">
      <div className="inside">
        <h3>Hello Hi, welcome to my page</h3>
      </div>

      
      <div className="person" style={person.theme}>
        <h1>Emp name: {person.name}, ID: {person.id}</h1>
      </div>

      
      <div className="person" style={person1.theme}>
        <h1>
          Emp name: {person1.name}, ID: {person1.id}, Salary: {person1.sal.join(', ')}, 
          Working: {person1.isFound ? 'Yes' : 'No'}
        </h1>
      </div>

      
      <div className="person" style={person2.theme}>
        <h1>Emp name: {person2.name}</h1>
      </div>

      
      <div className="person" style={person3.theme}>
        <h1>{person3.name}'s Todo</h1>
        <img className="avatar" src={imageUrl} alt={person3.name} />
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    </div>
  );
};

export default ObjPerson;
