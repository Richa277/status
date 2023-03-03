import Logo from "./logo"
import Profile from "./profile"

function Header(props){
    const set=props.online
    return(
        <div>
        Header
        <Logo/>
        <Profile set={set}/>
        </div>
    )
    }
    export default Header