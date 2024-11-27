import './App.css';
import Car from './components/Car';
import FamilyMember from './components/FamilyMember';

function App() {

  const person = {
    title: 'Father',
    name: 'John Doe',
    age: 30,
    car_type: 'Toyota'
  }

  return (
    <FamilyMember title={person.title} name={person.name} age={person.age} car_type={person.car_type} />
  );
}

export default App;
