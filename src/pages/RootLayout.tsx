import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <div className="mx-auto container bg-[#FFF2EB]">
      <Header />
      <Outlet />
    </div>
  );
}
