import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import Transactions from './components/Transactions/Transactions';
import user from './data/user.json';
import statData from './data/statistical-data.json';
import friendsData from './data/friends.json';
import transactions from './data/transactions.json';

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
     
    <h1>Задание 2</h1> 
    <Statistics statData = {statData}/>
   
       <h1>Задание 3</h1> 
       <FriendList friendsData = {friendsData}
        />
       <h1>Задание 4</h1> 
<Transactions items={transactions} />;
</div>
  );
}

export default App;
