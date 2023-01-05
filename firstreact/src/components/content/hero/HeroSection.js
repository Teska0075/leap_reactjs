import '../../all.module.css/HeroSection.css';
import LeftSectionHero from './LeftSectionHero/LeftSectionHero';
import RightSectionHero from './RightSectionHero/RightSectionHero';

const HeroSection = () => {
    return (
        <div className='Hero'>
            <LeftSectionHero/>
            <RightSectionHero/>
        </div>
    )
}

export default HeroSection;