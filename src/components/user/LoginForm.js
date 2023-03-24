import { ConfirmButton } from "../Button";
import classes from "./sign.module.css";
import { useRouter } from "next/router";

export default function LoginForm({ loginData, setLoginData }) {
  const router = useRouter();

  function inputHandler(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  async function submitHandler(e) {
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    });

    if (res.status === 200) {
      const userObj = await res.json();
      console.log(userObj);
      router.replace("/feed");
    } else {
      alert("incorrect username or password. Try Again!");
    }
  }

  return (
    <div className={classes.container}>
      <span>Login</span>
      <div className={classes.inputContainer}>
        <div>
          <label>Username</label>
          <input
            name="username"
            onChange={inputHandler}
            value={loginData.username}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            name="password"
            type="password"
            onChange={inputHandler}
            value={loginData.password}
          ></input>
        </div>
      </div>
      <ConfirmButton buttonHandler={submitHandler} />
    </div>
  );
}
