import "../../../styles/styles.scss";
import Lng from "../Language/Lng";

const Navbar = () => {
  return (
    <section>
      <div className="container">
        <div className="image">
          <a href="/">
            <img
              className="logo"
              src="https://codio.tech/img/logo-light.svg"
              alt="Logo"
            />
          </a>
        </div>
        <nav className="nav-section">
          <Lng />
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
