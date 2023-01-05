const CardItemContents = (props) => {
    return (
        <>
            <img className='pic' src={props.image} alt="image"/>
            <h5 className='date'>NOV 23 2020</h5>
            <h1 className='title'>This way is wrong about UI Design</h1>
            <p className='para'>A quick guide to assisting users in the challenging steps from learning about your podcast on th web. A quick guide to assisting users in the challenging steps from learning about your podcast on th web.</p>
            <button href="#" className='BtnRead'>READ MORE</button>
        </>
    );
};

export default CardItemContents;