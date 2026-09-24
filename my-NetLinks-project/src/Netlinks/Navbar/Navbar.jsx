import "./Navbar.css";
function Navbar() {
  return (
    <nav>
      <div className="Navbar">
        <img
          src="https://netlinks.af/_astro/logo.DUySRYvR_2j5iRN.avif"
          alt="Logo"
        />
        <div className="Nav-btn">
          <li>
            <ul>Solutions</ul>
            <ul>Survices</ul>
            <ul>Industries</ul>
            <ul>Company</ul>
          </li>
        </div>
        <button className="Nav-button">Get Started</button>
      </div>
    </nav>
  );
}
export default Navbar;
