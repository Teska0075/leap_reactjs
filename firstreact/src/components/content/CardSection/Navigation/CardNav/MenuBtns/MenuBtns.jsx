const MenuBtns = (props) => {
    return (
        <a href={props.link} className={props.classNer}>{props.text}</a>
    );
};

export default MenuBtns;