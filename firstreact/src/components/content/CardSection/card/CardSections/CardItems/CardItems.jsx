import CardItemContents from "./CardItemContents/CardItemContents";

const CardItemsL = [
  {
    img: "/images/mac.png",
  },
  {
    img: "/images/macbook.png",
  },
  {
    img: "/images/mac.png",
  },
  {
    img: "/images/macbook.png",
  },
  {
    img: "/images/mac.png",
  },
  {
    img: "/images/macbook.png",
  },
];

const CardItems = () => {
  return CardItemsL.map((item) => {
    return (
      <div className="CardItems">
        <CardItemContents image={item.img} />
      </div>
    );
  });
};

export default CardItems;
