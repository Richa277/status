import Logo from "./logo";
import Profile from "./profile";

function Header(props) {
  return (
    <div>
      <Logo />
      <Profile set={props.online} />
    </div>
  );
}
export default Header;
