import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'


//useState
function App1() {
  const [name] = useState("Abelti");//state declare giving it a default value of Abelti
  return <h1> My name is {name} </h1>;
}


//set

function App2() {
  const [name, nameset] = React.useState("Abelti");

  function changeName() {
    nameset("AB");
  }
  return <h1 onClick={changeName}> My name is {name}</h1>;
}


//multi use
function App3() {
  const [name, setName] = React.useState("Abelti");
  const [years] = React.useState(0);//
  const [sex] = React.useState('Male');

  function changeName() {
    setName("AB");
  }

  return <h1 onClick={changeName}> My name is {name} and I am {years} years old and I am a {sex}</h1>
}


//previous value

function App4() {
  const [name, setName] = React.useState("Abelti");
  const [year, setYear] = React.useState(0);

  function changeName() {
    setName("AB");
  }

  function changeYear() {
    setYear(year + 1);
  }

  return (
    <>
      <h1 onClick={changeName}> My name is {name} and I am {year} old.</h1>

      <button onClick={changeYear}>Add Year</button>
    </>
  );
}

//State with Object

function App5() {
  // const [name, setName] = React.useState("Abelti");
  // const [year, setYear] = React.useState(0);

  const [abelti, setState] = React.useState({
    name: "Abelti",
    year: 25,
    nationality: "Ethiopian"
  });
  const [tsega, setStates]= React.useState(
    {
      name: "Tsega",
      age: 20,
      nation: "Ethiopian"
    }
  );

  function changeName() {
    setState({...abelti, name: "AB"});
  }

  function changeYear() {
    setState(prev => {
      return {
        ...prev,
        year: prev.year + 1
      }
    })
  }

  return (
    <>
      <h1 onClick={changeName}> My name is {abelti.name} and I am {abelti.year} old and I am an {abelti.nationality} citizen.</h1>

      <button onClick={changeYear}>Add Year</button>
    </>
  );
}

// state as a function

const App6 = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count value is: {count}</h1>
      <button onClick={() => setCount(0)}>Reset</button>
      <button 
        onClick={() => setCount(prevCount => prevCount + 1)}>
        Plus (+)
      </button>
      <button 
        onClick={() => setCount(prevCount => prevCount - 1)}>
       Minus (-)
      </button>
    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />)
