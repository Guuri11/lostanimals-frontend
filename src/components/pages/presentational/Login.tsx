import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  setUsername: React.Dispatch<React.SetStateAction<string>>
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  handleSubmit: () => void
}
export default function LoginPresentational(
  { setUsername, setPassword, handleSubmit }: Props,
) : JSX.Element {
  return (
    <div className="text-center my-5">
      <h2>Login</h2>
      <div className="my-4">
        <input type="text" className="px-4 py-2" placeholder="Enter username" onChange={(event) => { setUsername(event.target.value); }} />
      </div>
      <div className="my-4">
        <input type="password" className="px-4 py-2" placeholder="Enter password" onChange={(event) => { setPassword(event.target.value); }} />
      </div>
      <button onClick={handleSubmit} type="button">Submit</button>
      <div>
        <Link to="/register">Register</Link>
        <Link to="/">Home</Link>
      </div>
    </div>
  );
}
