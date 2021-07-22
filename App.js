
import './App.css';
import ProfileCard from './ProfileCard';
import Profile from './Profile'

function App() {
  const users = [
    {
      name: 'Elon musk',
      location: 'Las Vegas',
      foodType: 'Everything',
      age: 28,
      likes: 'Coding into the wee hours of the morning',
      twitterUsername: 'Elon Musk',
      twitterLink: <a href = "https://twitter.com/chrisnode">@chrisnode</a>,
      avatar: 'https://cdn.britannica.com/54/188754-050-A3613741/Elon-Musk-2010.jpg'
    },
 {
      name: 'Chris Morgan',
      location: 'Florida',
      foodType: 'Chiken and Chips',
      age: 45,
      likes: 'Swimming and Reading',
      twitterUsername: 'Morgan45',
      twitterLink: <a href = "https://twitter.com/chrisnode">@morgan45</a>,
      avatar:
        'https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png'
    }
  ]
  return (
    <div className="App">
      
      
      <ProfileCard user = {users} />
      <Profile userS = {users} />



    </div>
  );
}

export default App;
