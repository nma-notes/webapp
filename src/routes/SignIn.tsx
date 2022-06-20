import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";
import { FormEvent, useContext, useState } from "react";
import AuthContext from "../AuthContext";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authCtx = useContext(AuthContext);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!authCtx) return;

    authCtx.signIn(email.trim(), password.trim());
  };

  return (
    <div
      className={"flex content-center justify-center items-center min-h-screen"}
    >
      <form
        className={
          "border p-10 rounded-2xl flex flex-col justify-center items-center"
        }
        onSubmit={handleSubmit}
      >
        <h2 className={"m2 text-xl"}>Sign In</h2>
        <Input
          type={"email"}
          placeholder={"Email"}
          value={email}
          title={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input
          type={"password"}
          placeholder={"Password"}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <Link to={"/"} className={"self-end hover:underline m-2 text-sm"}>
          Forgot your password?
        </Link>
        <div className={"flex justify-between w-full m-5 items-center"}>
          <Button type={"submit"}>Sign In</Button>
          <LinkButton to={"/sign_up"}>Sign Up</LinkButton>
        </div>
        <Link to={"/"} className={"hover:underline m-2 text-sm"}>
          Back to home
        </Link>
      </form>
    </div>
  );
}
