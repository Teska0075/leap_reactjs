import css from '../../../all.module.css/CardSection.css';

const CardItemsL = [
    {
        img1:"/images/mac.png"
    },
    {
        img1:"/images/mac.png"
    },
    {
        img1:"/images/mac.png"
    }
];
const CardItemsR = [
    {
        img2:"/images/macbook.png"
    },
    {
        img2:"/images/macbook.png"
    },
    {
        img2:"/images/macbook.png"
    }
];

const CardSection = () => {
    return (
        <div className='CardSections'>
            <div className='CardSectionL'>
            {
                CardItemsL.map((item) => {
                    return (
                        <div className='CardItems'>
                            <img className='pic' src={item.img1} alt="image"/>
                            <h5 className='date'>NOV 23 2020</h5>
                            <h1 className='title'>This way is wrong about UI Design</h1>
                            <p className='para'>A quick guide to assisting users in the challenging steps from learning about your podcast on th web. A quick guide to assisting users in the challenging steps from learning about your podcast on th web.</p>
                            <button href="#" className='BtnRead'>READ MORE</button> 
                        </div>
                    )
                })
            }
            </div>
            <div className='CardSectionR'>
            {
                CardItemsR.map((item) => {
                    return (
                        <div className='CardItems'>
                            <img className='pic' src={item.img2} alt="image"/>
                            <h5 className='date'>NOV 23 2020</h5>
                            <h1 className='title'>This way is wrong about UI Design</h1>
                            <p className='para'>A quick guide to assisting users in the challenging steps from learning about your podcast on th web. A quick guide to assisting users in the challenging steps from learning about your podcast on th web.</p>
                            <button href="#" className='BtnRead'>READ MORE</button> 
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
};

export default CardSection;