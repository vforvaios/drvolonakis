import Header from "@/components/common/Header";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Header />

      <main>
        <Outlet />
      </main>

      <footer>{/* Κοινό footer, αν χρειάζεται */}</footer>
    </div>
  );
}
