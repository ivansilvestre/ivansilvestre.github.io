const Card = ({ href, title, icon }) => {
  return (
    <a
      className="w-full bg-[var(--main-color)] m-1 rounded-lg flex border border-[var(--secondary-color)] hover:bg-[var(--grey-color)]"
      target="_blank"
      href={href}
    >
      <div className="flex items-center justify-between w-full m-3">
        <div className="icon">{icon}</div>
        <div>{title}</div>
        <div className="icon"></div>
      </div>
    </a>
  );
};

export default Card;
