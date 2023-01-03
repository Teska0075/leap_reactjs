import css from '../../all.module.css/HeroSection.css';

const ButtonItems = [
    {
        text:"TWITTER",
        link:"#",
        icon:"/images/twitter.png",
        class:"BtnTwttr"
    },
    {
        text:"LINKEDIN",
        link:"#",
        icon:"/images/linked_in.png",
        class:"BtnLnkdn"
    },
    {
        text:"MEDIUM",
        link:"#",
        icon:"/images/medium.png",
        class:"BtnMdm"
    },
]

const HeroSection = () => {
    return (
        <div className='Hero'>
            <div className='LeftSectionHero'>
                <h1>Blog Posts</h1>
                <h2>I think so, this is it</h2>
                <p>Design begins after I begin to think about how to present an experience most successfully, whether a button I put in can solve a problem. The only point in design is not ui design, if the user does not have a good experience at the end of the product, the design will be considered unsuccessful in my opinion.</p>
                <div className='Buttons'>
                    {
                        ButtonItems.map((item) => {
                            return (
                                <button className={item.class} href={item.link}><img src={item.icon} alt="icon" />{item.text}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className='RightSectionHero'>
                <img src='/images/Saly.png' alt='pic'/>
            </div>
        </div>
    )
}

export default HeroSection;