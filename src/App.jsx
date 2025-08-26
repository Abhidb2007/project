import { useState } from "react";
function App(){
  const[currentTab, setCurrentTab]=useState("feed");
  return <div>
    <button onClick={function(){
      setCurrentTab("feed")
      }}  style={{color:currentTab=="feed"?"red":"yellow"}}>Feed</button>
      <button onClick={function(){
        setCurrentTab("message");
      }}style={{color:currentTab=="message"? "red":"white"}}>message</button>
    
  </div>
}
export default App;