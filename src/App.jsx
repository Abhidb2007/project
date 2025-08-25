import{useState} from "react";
function App(){
  return <div>
    hi heere
    <Greeting name={"abhi"}/>
  </div>
}
function Greeting(props){
  return <div>
    hi there{props.name}

  </div>
}
export default App;