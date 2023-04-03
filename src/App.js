import './App.css';
import { Hello } from './components/Welcome'; // if the imported component is not imported as default use this syntax to import
import Greets from './components/Greets'; // else if the imported component is imported as default use this way
import { useEffect, useState, useSyncExternalStore } from 'react';
import { Text } from './components/Text';


// We can use components inside othe components the User component is described below and used in the App component here
function App() {
  return (
    <div className="App">
      <User name="ABC" age={20} email="amansingh8178@gmail.com"/>
      <User name="XYZ" age={121} email="askjd@gmail.com"/>
      <Hello></Hello>
      <Greets></Greets>
    </div>
  );
}



// every component can take props as arguments
// props are javascript objects containing arguments which we can pass into the component such as name age email etc
const User = (props)=>{
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.age}</h2>
      <h3>{props.email}</h3>
    </div>
  )
}


function App2(){
  return (
    <div className="App2">
      <Job salary={100} pos="senior" comp="google"/>
      <Job salary={220} pos="dev" comp="meta"/>
      <Job salary={12130} pos="manager" comp="netflix"/>
    </div>
  )
}

const Job=(props)=>{
  return (
    <div>
      <h2>{props.salary}</h2>
      <h2>{props.pos}</h2>
      <h2>{props.comp}</h2>
    </div>
  )
}



function App3(){
  const age=19;
  return (
    <div className="App3">
      {age>=18?<h1>Good</h1>:<h1>Bad</h1>}
    </div>
  )
}



function App4(){
  const planets = [
    {name: "Mars", gas: false},
    {name: "Earth", gas: true},
    {name: "Venus", gas: false},
    {name: "Neptune", gas: false},
    {name: "Jupiter", gas: true},
    {name: "Pluto", gas: true}
  ];

  return (
    <div className="App4">
      {planets.map((value,key)=>value.gas && <h1>{value.name}</h1>
      )}
    </div>
  )
}


// on updating the value of some used variabel inside the component will not change it in the location where we have used it.
// this is because the component is rendered only once
// so we use state to overcome this problem


function App5(){
  const [age , setAge] = useState(0);
  // square bracket ke andar we write the variable that we have to keep track of changing and a function that will change the variable
  // use state ke bracket ke andar we write the default value of the container which will be used to display when it is not changes any time


  const increaseAge = ()=>{
    setAge(age+1)
  };

  return (
    <div className='App5'>
      {age}
      <button onClick={increaseAge}> Increase</button>
    </div>
  )
}



function App6(){

  const [text, setText] = useState(true);

  return (
    <div className='App6'>
      <button onClick={()=>{setText(!text)}}>Show/Hide</button>
      {text === true && <h1>Aman Singh</h1>}
    </div>
  )
}



function App7(){
  const [count, setCount] = useState(0);


  return (
    <div className='App7'>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(0)}>Set to 0</button> <br></br>
      {count}
    </div>
  )
}


function App8(){
  const [showText, setShowText] = useState(false);
// Useeffect is used in this component go to text.js to see
  return (
    <div className='App8'>
      <button onClick={()=>setShowText(!showText)}>Show Text</button>
      {showText && <Text />}
    </div>
  )
}



function App9(){

  const [catFact, setCatFact] = useState("");

  useEffect(()=>{
    const URL = "https://catfact.ninja/fact";
    fetch(URL).then((response)=>response.json()).then((data)=>{
      setCatFact(data.fact);
    })
  },[])



  return (
    <div className='App9'>
      <button>Cat Fact</button>
      <p>{catFact}</p>
    </div>
  )
}


function App10(){
  const [name, setName] = useState("");
  const [predictedAge, setPredictedAge] = useState(NaN);
  const fetchAge=()=>{
    const URL = `https://api.agify.io/?name=${name}`;
    fetch(URL).then((response)=>response.json().then((data)=>{
      setPredictedAge(data.age);
    }))
  }

  return (
    <div className='App10'>
      <input placeholder='Enter name' onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={fetchAge}>Predict Age</button>

      <h2> Predocted Age: {predictedAge}</h2>
    </div>
  )
}
export default App10;
