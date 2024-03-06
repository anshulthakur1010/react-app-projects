export const ReactForm = () => {
  return (
    <>
      <form action="">
        <div>
          <label htmlFor="email">Html</label>
          <input type="text" name="email" id="email" />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" id="password" />
        </div>

        <button type="submit">Login</button>
      </form>
    </>
  );
};
