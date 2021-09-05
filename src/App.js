import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './data/user.json';
import statData from './data/statistical-data.json';

function App() {
  return (
      <div>
       <h1>Задание 1</h1> 
       <Profile 
          name={ user.name }
          tag={ user.tag }
          location={ user.location }
          avatar={ user.avatar }
          followers={ user.stats.followers }
          views={ user.stats.views }
          likes={ user.stats.likes }
        />
     </div>
   //  <div>
   //    <h1>Задание 2</h1> 
    //  <Statistics
    //    statData = {statData}
   //   />
   //  </div>
    
  );
}

export default App;
