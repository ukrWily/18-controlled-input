function Login() {
  function handleFormSubmit(event) {
    event.preventDefault();
    const userDate = {
      username: event.target.username.value,
      password: event.target.password.value,
    };
    alert(JSON.stringify(userDate));
    console.log(userDate);
  }
  //
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Username: <input type="text" name="username" id="" />
        </label>
        <label htmlFor="">
          Password: <input type="password" name="password" id="" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
