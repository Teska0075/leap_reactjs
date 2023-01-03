import css from '../../all.module.css/NavigationBar.css'

const NavItems = [
    {
        name: "PORTFOLIO",
        link: "#",
        class: "NavItem"
    },
    {
        name: "BLOG",
        link: "#",
        class: "NavItem"
    },
    {
        name: "CV",
        link: "#",
        class: "NavItem"
    },
    {
        name: "STORE",
        link: "#",
        class: "NavItem"
    },
    {
        name: "FREELANCE",
        link: "#",
        class: "NavItem"
    },
    {
        name: "ABOUT ME",
        link: "#",
        class: "NavItem"
    },
    {
        name: "CONTACT",
        link: "#",
        class: "NavItem"
    }
];

const NavigationBar = () => {
    return (
        <div className='Navbar'>
            <div className="LeftSection">
                <img className="Logo" src="/images/Leap.png" alt="logo"></img>
                <button className="HireMe"><img className='img' src='/images/Vector.png'/>Hire Me</button>
            </div>
            <div className="NavMenu">
                {
                    NavItems.map((item) => {
                        return (
                            <a href={item.link} className={item.class}>{item.name}</a>
                        )
                    })
                }
            </div>
        </div>
    )
};

export default NavigationBar;