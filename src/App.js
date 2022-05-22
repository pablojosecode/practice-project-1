import logo from './logo.svg';
import Form from './components/form/Form';
import Input from './components/Input';
import './App.css';
import { useState } from 'react';

function App() {

  let list = [];
  const [toPrint, setPrint] = useState([]);


  const submitHandler = (obj) => {
    setPrint((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: obj.name, age: obj.age, id: Math.random().toString() },
      ];
    });

  }
  

  return (
    <div>
      <Form submitHandler={submitHandler}/>
      {toPrint.map((print) => <Input name={print.name} age={print.age} />)}
      </div>
  );
}

export default App;
