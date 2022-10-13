
import './App.css';
import Profile from './Profile/Profile';

function App() {
  const user={
    fullName:'Alex',
    bio:'Jean-Baptiste Poquelin dit Molière est un comédien et dramaturge français né et baptisé le 15 janvier 1622 à Paris où il est mort après avoir joué sur scène la quatrième représentation de sa pièce Le Malade imaginaire le 17 février 1673',
    profession:'comédien et dramaturge',
    image:'https://th.bing.com/th/id/R.9db7b49531b45c8c23373a94d51c0dfa?rik=%2bMcvqxrgHauueQ&pid=ImgRaw&r=0',
  }
  const handleName=()=>{

    alert(`this the name of ${user.fullName}`);    
  }
  return (
    <div className="App"   style={{display:'flex',backgroundColor: "aquamarine",borderBlock:'1px',alignItems:'center'}}>
     < Profile user={user} handleName={handleName} />
    </div>
  );
}

export default App;
