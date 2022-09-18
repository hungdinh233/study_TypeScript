import React, { useEffect, useState } from "react";
import Login from "../../pages/Login/Login";

type Props = {
  Component: React.FC;
  ComponentMoblie: React.FC;
};

type screen = {
  width: number;
  height: number;
};

export default function ResponsiveItem({ Component, ComponentMoblie }: Props) {
  const [screen, setScreen] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    //khi người dùng resize
    let resizeFunction = () => {
      //lấy ra kích thước mới của window
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.onresize = resizeFunction;
    return () => {
      window.removeEventListener("resize", resizeFunction);
    };
  }, []);

  console.log(screen);
  
  let ComponentRender = Component;
  if (screen.width < 768 && ComponentMoblie) {
    ComponentRender = ComponentMoblie;
  }

  return (
    <>
      <ComponentRender />
    </>
  );
}

//2 loại thể hiện component

// const Component: React.FC = (props) => {
//   return <div>jsx</div>;
// };

// const tr: JSX.Element = <tr></tr>;

// const login: JSX.Element = <Login />;
