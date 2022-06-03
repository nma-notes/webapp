import { Link } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

export default function SignIn() {
  return (
    <div
      className={"flex content-center justify-center items-center min-h-screen"}
    >
      <form
        className={
          "border p-10 rounded-2xl flex flex-col justify-center items-center"
        }
      >
        <h2 className={"m2 text-xl"}>Sign In</h2>
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Link to={"/"} className={"self-end hover:underline m-2 text-sm"}>
          Forgot your password?
        </Link>
        <div className={"flex justify-between w-full m-5 items-center"}>
          <Button>Sign In</Button>
          <LinkButton to={"/sign_up"}>Sign Up</LinkButton>
        </div>
        <Link to={"/"} className={"hover:underline m-2 text-sm"}>
          Back to home
        </Link>
      </form>
    </div>
  );
}
