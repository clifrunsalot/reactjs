import React from 'react'
import Car from './Car';

function FamilyMember(props) {
  return (

    <div>
        <h2>title: {props.title} name: {props.name} age: {props.age}</h2>
        <Car car_type={props.car_type}/>
    </div>
  )
}

export default FamilyMember;
