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


const Buttons = () => {
    return (
        <div className='Buttons'>
            {
                ButtonItems.map((item) => {
                    return (
                        <button className={item.class} href={item.link}><img src={item.icon} alt="icon" />{item.text}</button>
                    )
                })
            }
        </div>
    );
};

export default Buttons;