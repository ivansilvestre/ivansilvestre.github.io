const Card = ({ href, title, icon }) => {
  return (
    <>
      <a className="tile" target="_blank" href={href}>
        <div className="tile-content">
          <div className="icon">{icon}</div>
          <div>{title}</div>
          <div className="icon"></div>
        </div>
      </a>
    </>
  );
};

export default Card;
