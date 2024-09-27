import './navbar.modular.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
            <img src="https://flowbite.com/docs/images/logo.svg" alt="logo-svg" />
            <h3 style={{margin:10}} >GeekFoods</h3>
        </div>
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/quotes">Quotes</a>
          <a href="/resturants">Resturants</a>
          <a href="/foods">Foods</a>
          <a href="./contact">Contact</a>
        </div>
        <div className="getStarted">
            <button>Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;