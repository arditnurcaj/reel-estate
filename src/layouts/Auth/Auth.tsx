import { FunctionComponent, ReactNode } from "react";

interface IProps {
  main: ReactNode;
}

const AuthLayout: FunctionComponent<IProps> = ({ main }) => {
  return (
    <div className="flex text-white h-screen overflow-y-hidden">
      <div className="hidden md:block flex-1">
        <img
          className="w-full h-full object-cover"
          src="/splash-wallpaper.jpg"
          alt="Splash"
        />
      </div>
      <div className="flex-1">{main}</div>
    </div>
  );
};

export default AuthLayout;
