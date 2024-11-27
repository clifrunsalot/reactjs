import logo from './logo.svg';
import './App.css';
import InputComponent from './components/InputComponent';
import RegisterForm from './components/RegisterForm';
import TextInputWithFocusButton from './components/TextInputWithFocusButton';
import UpdateMessage from './components/UpdateMessage';

function App() {
  return (
    <>
    {/* Passing props to the InputComponent */}
    <InputComponent />

    {/* Managing state in the RegisterForm */} 
    <RegisterForm />

    {/* Using refs in the TextInputWithFocusButton */} 
    <TextInputWithFocusButton />

    {/* Using useState in UpdateMessage */}
    <UpdateMessage />
    </>
  );
}

export default App;
