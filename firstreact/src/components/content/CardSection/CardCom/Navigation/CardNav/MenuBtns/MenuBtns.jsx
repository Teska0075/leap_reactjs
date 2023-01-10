const MenuBtns = (props) => {
  return (
    <a
      href={props.link}
      className={props.classNer}
      onClick={() => {
        props.handleClick(props.text);
      }}
    >
      {props.text}
    </a>
  );
};

export default MenuBtns;
