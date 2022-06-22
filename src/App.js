import './App.css';
import { HomeNf } from 'gettint-drunk/dist/components';


function App() {
  return (
    <div className="App">
     
     <HomeNf 
      onQuickMatch={()=> console.log('onQuickMatch')} 
      onCreateLobby={()=> console.log('onCreateLobby')} 
      onLeaderBoard={()=> console.log('onLeaderBoard')} 
      />
    </div>
  );
}

export default App;
