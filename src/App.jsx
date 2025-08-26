import { useState } from "react";
function App(){
  const[currentTab, setCurrentTab]=useState(1);
  useEffect(function(){
    console.log("send request to backend to get data from tab"+currentTab)
  },[currentTab])
  return <div>
    <button onClick={function(){
      setCurrentTab("1")
      }}  style={{color:currentTab=="1"?"red":"yellow"}}>Todo #1</button>
      <button onClick={function(){
        setCurrentTab("2");
      }}style={{color:currentTab=="2"? "red":"white"}}>Todo #2</button>
    
  </div>
}
export default App;