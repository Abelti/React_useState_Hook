import React from 'react'
import ReactDOM from 'react-dom/client'
import { useState } from 'react'


//useState
function App1() {
  const [name] = useState("Abelti");//state declare giving it a default value of Abelti
  return <p> My name is {name} </p>;
}


//set

function App2() {
  const [name, nameset] = React.useState("Abelti");

  function changeName() {
    nameset("AB");
  }
  return <p onClick={changeName}> My name is {name}</p>;
}


//multi use
function App3() {
  const [name, setName] = React.useState("Abelti");
  const [years] = React.useState(0);//
  const [sex] = React.useState('Male');

  function changeName() {
    setName("AB");
  }

  return <p onClick={changeName}> My name is {name} and I am {years} years old and I am a {sex}</p>
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
      <p onClick={changeName}> My name is {name} and I am {year} old.</p>

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
      <p onClick={changeName}> My name is {abelti.name} and I am {abelti.year} old and I am an {abelti.nationality} citizen.</p>

      <button onClick={changeYear}>Add Year</button>
    </>
  );
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App2 />)
