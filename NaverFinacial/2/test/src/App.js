import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';

function App() {

  const onSubmit = (userName, userPassword) => {
    console.log(`UserName = ${userName}, UserPassword = ${userPassword}`);
  };

  return (
    <div className="App">
      <LoginForm onSubmit={onSubmit}/>
    </div>
  );
}

export default App;
