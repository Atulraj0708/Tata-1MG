import classes from "./NavLink.module.css";

const NavLink = (props) => {
    return (
        <div className = {classes.container} style = {{"width": `${props.width}`}}>
            {props.children}
        </div>
    );
}

export default NavLink;