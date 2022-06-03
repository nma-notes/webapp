import Input from "../components/Input";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import LinkButton from "../components/LinkButton";

export default function SignUp() {
  return (
    <div
      className={"flex content-center justify-center items-center min-h-screen"}
    >
      <form
        className={
          "border p-10 rounded-2xl flex flex-col justify-center items-center"
        }
      >
        <h2 className={"m2 text-xl"}>Sign Up</h2>
        <Input type={"email"} placeholder={"Email"} />
        <Input type={"password"} placeholder={"Password"} />
        <Input type={"password"} placeholder={"Password confirmation"} />
        <div className={"flex justify-between w-full m-5 items-center"}>
          <Button>Sign Up</Button>
          <LinkButton to={"/sign_up"}>Sign In</LinkButton>
        </div>
        <Link to={"/"} className={"hover:underline m-2 text-sm"}>
          Back to home
        </Link>
      </form>
    </div>
  );
}
