import LeftSection from "./LeftSection/LeftSection";
import NavMenu from "./NavMenu/NavMenu";

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

const NavBar = () => {
    return (
        <div className='Navbar'>
            <LeftSection/>
            <div className="NavMenu">
                {
                    NavItems.map((item) => {
                        return (
                            <NavMenu link={item.link} classNer={item.class} name={item.name}/>
                        )
                    })
                }
            </div>
            
        </div>
    );
};

export default NavBar;