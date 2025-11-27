import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="mx-auto container">
      <Header />
      <Outlet />
    </div>
  );
}
