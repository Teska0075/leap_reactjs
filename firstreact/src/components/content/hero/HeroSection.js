import '../../all.module.css/HeroSection.css';
import LeftSectionHero from './LeftSectionHero/LeftSectionHero';


const HeroSection = () => {
    return (
        <div className='Hero'>
            <LeftSectionHero/>
            <div className='RightSectionHero'>
                <img src='/images/Saly.png' alt='pic'/>
            </div>
        </div>
    )
}

export default HeroSection;