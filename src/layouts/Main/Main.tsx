import { FunctionComponent, ReactNode } from "react";
import Link from "next/link";

import useAuth from "src/hooks/useAuth";

interface IProps {
  main: ReactNode;
}

const MainLayout: FunctionComponent<IProps> = ({ main }) => {
  const { authenticated, logout } = useAuth();

  return (
    <div className="bg-gray-900 m-w-screen-2xl mx-auto text-white">
      <nav className="bg-gray-800" style={{ height: "64px" }}>
        <div className="px-6 flex items-center justify-between h-16">
          <Link href="/">
            <a>
              <img
                src="/home-color.svg"
                alt="home house"
                className="inline w-6"
              />
            </a>
          </Link>
          {authenticated ? (
            <>
              <Link href="/">
                <a>Add House</a>
              </Link>
              <button onClick={logout}>Logout</button>
            </>
          ) : (
            <Link href="/auth">
              <a>Login/Signup</a>
            </Link>
          )}
        </div>
      </nav>
      <main style={{ height: "calc(100vh - 64px)" }}>{main}</main>
    </div>
  );
};

export default MainLayout;
