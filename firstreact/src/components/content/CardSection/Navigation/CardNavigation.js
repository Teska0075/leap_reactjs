import css from '../../../all.module.css/CardNavigation.css';

const CardNavItems = [
    {
        text:"All",
        link:"#",
        class:"CardNavItem"
    },
    {
        text:"UI Design",
        link:"#",
        class:"CardNavItem"
    },
    {
        text:"UX Design",
        link:"#",
        class:"CardNavItem"
    },
    {
        text:"Product Design",
        link:"#",
        class:"CardNavItem"
    },
    {
        text:"Articles",
        link:"#",
        class:"CardNavItem"
    },
    {
        text:"Tutorials",
        link:"#",
        class:"CardNavItem"
    },
    {
        text:"News",
        link:"#",
        class:"CardNavItem"
    }
]

const CardNavigation = () => {
    return (
        <div className='CardNav'>
            {
                CardNavItems.map((item) => {
                    return (
                        <a href={item.link} className={item.class}>{item.text}</a>
                    )
                })
            }
        </div>
    )
};

export default CardNavigation;