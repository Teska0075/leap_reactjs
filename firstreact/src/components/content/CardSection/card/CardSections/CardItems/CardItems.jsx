import CardItemContents from "./CardItemContents/CardItemContents";

const CardItemsL = [
    {
        img1:"/images/mac.png"
    },
    {
        img1:"/images/macbook.png"
    },
    {
        img1:"/images/mac.png"
    },
    {
        img1:"/images/macbook.png"
    },
    {
        img1:"/images/mac.png"
    },
    {
        img1:"/images/macbook.png"
    }
];

const CardItems = () => {
    return (
        <div className='CardItems'>
            {
                CardItemsL.map((item) => {
                    return (
                        <CardItemContents image={item.img1}/>
                    );
                })
            }
        </div>
    );
};

export default CardItems;