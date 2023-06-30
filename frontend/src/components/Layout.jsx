import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BurgerMenu from "./BurgerMenu";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col justify-between w-full">
        <BurgerMenu />
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
