
function App(){
  const[currentTab, seCurrentTab]=useState("feed");
  return <div>
    <button onClick={function(){
      setCurrentTab("feed")
      }}  style={{color:currentTab=="feed"?"red":"yellow"}}>Feed</button>
    
  </div>
}