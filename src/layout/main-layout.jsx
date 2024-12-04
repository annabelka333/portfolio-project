import { Outlet } from "react-router"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer";

const MainLayout = () => {
  return (
    <>
      <header>
        <div className="container mx-auto">
          <Navbar />
        </div>
      </header>
      <main className="flex flex-col flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout;