import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Layout() {
	return (
    <div>
      <Navbar />
      <main style={{ padding: "1rem" }}>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout;