import MenuBtns from "./MenuBtns/MenuBtns";

const CardNavItems = [
  {
    text: "All",
    link: "#",
    class: "CardNavItem",
  },
  {
    text: "UI Design",
    link: "#",
    class: "CardNavItem",
  },
  {
    text: "UX Design",
    link: "#",
    class: "CardNavItem",
  },
  {
    text: "Product Design",
    link: "#",
    class: "CardNavItem",
  },
  {
    text: "Articles",
    link: "#",
    class: "CardNavItem",
  },
  {
    text: "Tutorials",
    link: "#",
    class: "CardNavItem",
  },
  {
    text: "News",
    link: "#",
    class: "CardNavItem",
  },
];

const CardNav = () => {
  const handleClick = () => {
    console.log("asd123");
  };

  return (
    <div className="CardNav">
      {CardNavItems.map((item) => {
        return (
          <MenuBtns
            text={item.text}
            classNer={item.class}
            handleClick={handleClick}
          />
        );
      })}
    </div>
  );
};

export default CardNav;
