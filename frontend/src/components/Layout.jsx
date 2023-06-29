import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="flex h-screen">
      <Navbar />
      <div className="flex flex-col justify-between w-full">
        <div />
        <main className="w-full ml-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
