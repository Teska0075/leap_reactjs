import { useState } from "react";
import CardItemContents from "../CardSection/CardCom/card/CardSections/CardItems/CardItemContents/CardItemContents";
import MenuBtns from "../CardSection/CardCom/Navigation/CardNav/MenuBtns/MenuBtns";

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

const CardSection1 = () => {
  const [news, setNews] = useState(CardItemsL);

  const handleClick = (name) => {
    console.log("asd123", name);
    const filtered = CardItemsL.filter((item) => item.category === name);
    console.log(filtered);
    setNews(filtered);
  };

  return (
    <>
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
      <div>
        {CardItemsL.map((item) => {
          return (
            <div className="CardItems">
              <CardItemContents
                image={item.img}
                title={item.title}
                content={item.content}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardSection1;

// const CardItems = () => {
//   const [news, setNews] = useState(CardItemsL);

//   const handleClick = () => {};

//   return CardItemsL.map((item) => {
//     return (
//       <div className="CardItems">
//         <CardItemContents
//           image={item.img}
//           title={item.title}
//           content={item.content}
//         />
//       </div>
//     );
//   });
// };

// export default CardItems;
