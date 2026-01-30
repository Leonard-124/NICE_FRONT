


import logo from "./assets/images/ibonnis3.png"

function Header() {
  return (
    <header style={{ display: "flex", alignItems: "center", padding: "10px" }}>
      <img src={logo} alt="IbonnI Logo" style={{ height: "40px", marginRight: "10px" }} />
      <h1></h1>
    </header>
  );
}

export default Header;