import style from "./navbar.module.css";

const Navbar = () => {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.left}>
          <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
          <span>GeekFood</span>
        </div>
        <div className={style.mid}>
          <ul>
            <li>Home</li>
            <li
              style={{
                color: "yellow",
              }}
            >
              Quote
            </li>
            <li>Restaurant</li>
            <li>Foods</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={style.right}>
          <button>Get Started</button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
