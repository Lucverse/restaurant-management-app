import { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email === "Luc" && password === "123") {
      localStorage.setItem('loginKey', true);      
      setIsLoggedIn(!IsLoggedIn);
    } else {
      alert("Please Check the Credentials");
    }
  };

  return (
    <div className='loginPage'>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Login Page</h3>
        <label htmlFor="username">Email</label>
        <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button>Log In</button>        
      </form>
    </div>
  );
}

export default LoginPage;
