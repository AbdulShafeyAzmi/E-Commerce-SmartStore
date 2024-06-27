import { Outlet } from "react-router-dom";
import "./App.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main className="min-h-[calc(100vh-120px)] pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
