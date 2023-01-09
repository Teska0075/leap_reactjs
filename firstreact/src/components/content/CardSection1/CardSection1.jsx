import { useState } from "react";
import CardItemContents from "./CardItemContents/CardItemContents";
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

const CardItemsL = [
    {
      img: "/images/mac.png",
      category: "UI",
      title: "This way is wrong about UI Design",
      date: "NOV 23 2020",
      content:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    {
      img: "/images/macbook.png",
      category: "UI",
      title: "This way is wrong about UI Design",
      date: "NOV 23 2020",
      content:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    {
      img: "/images/mac.png",
      category: "UX",
      title: "This way is wrong about UX Design",
      date: "NOV 23 2020",
      content:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    {
      img: "/images/macbook.png",
      category: "DEV",
      title: "This way is wrong about DEV Design",
      date: "NOV 23 2020",
      content:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    {
      img: "/images/mac.png",
      category: "DEV",
      title: "This way is wrong about DEV Design",
      date: "NOV 23 2020",
      content:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
    },
    {
      img: "/images/macbook.png",
      category: "UX",
      title: "This way is wrong about UX Design",
      date: "NOV 23 2020",
      content:
        "A quick guide to assisting users in the challenging steps from learning about your podcast on the web. A quick guide to assisting users in the challenging steps from learning about your podcast on the web.",
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





const CardItems = () => {
  const [news, setNews] = useState(CardItemsL);

  const handleClick = () => {};

  return CardItemsL.map((item) => {
    return (
      <div className="CardItems">
        <CardItemContents
          image={item.img}
          title={item.title}
          content={item.content}
        />
      </div>
    );
  });
};

export default CardItems;
