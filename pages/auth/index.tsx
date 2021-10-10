import { AuthLayout } from "src/layouts/";
import { LoginForm } from "./components";

export default function Auth() {
  return (
    <AuthLayout
      main={
        <div className="py-4 px-10 h-full">
          <LoginForm />
        </div>
      }
    />
  );
}
