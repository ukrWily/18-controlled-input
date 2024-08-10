import { useState } from "react";
//
function Login() {
  const [data, setData] = useState({ username: "", password: "" });
  //
  function handleFormSubmit(event) {
    event.preventDefault();
    alert(JSON.stringify(data));
    console.log(data);
  }
  function handleInputChange(text, name) {
    setData({ ...data, [name]: text });
  }
  //
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="">
          Username:{" "}
          <input
            type="text"
            value={data.username}
            onChange={(e) => handleInputChange(e.target.value, "username")}
          />
        </label>
        <label htmlFor="">
          Password:{" "}
          <input
            type="password"
            value={data.password}
            onChange={(e) => handleInputChange(e.target.value, "password")}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;
