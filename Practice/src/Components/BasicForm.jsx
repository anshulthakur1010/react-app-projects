import { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <form className="form" action="">
        <div className="email">
          <label htmlFor="name">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="password">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default BasicForm;
