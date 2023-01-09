const CardItemContents = (props) => {
  return (
    <>
      <img className="pic" src={props.image} alt="image" />
      <h5 className="date">{props.date}</h5>
      <h1 className="title">{props.title}</h1>
      <p className="para">{props.content}</p>
      <button href="#" className="BtnRead">
        READ MORE
      </button>
    </>
  );
};

export default CardItemContents;
