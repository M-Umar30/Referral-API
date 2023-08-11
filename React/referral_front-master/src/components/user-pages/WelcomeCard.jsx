import "./style.css";

const Sidenav = () => {
  return (
    <div className="welcome-card">
      <img src={require("../images/profile.png")} width={100} alt="profile" />
      <h1>Username</h1>
    </div>
  );
};
export default Sidenav;
