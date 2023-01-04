const NavMenu = (props) => {
    return (
            <a href={props.link} className={props.classNer}>{props.name}</a>
    );
};

export default NavMenu;