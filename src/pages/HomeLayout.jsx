import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <>
      <nav>
        <span>Comfy</span>
      </nav>
      <Outlet />
    </>
  );
}

export default HomeLayout;
