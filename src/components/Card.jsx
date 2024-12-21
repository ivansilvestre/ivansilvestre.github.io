const Card = ({ href, label, icon }) => {
  return (
    <a
      className="w-full bg-[var(--main-color)] m-1 rounded-lg flex border border-[var(--secondary-color)] hover:bg-[var(--grey-color)]"
      target="_blank"
      href={href}
    >
      <div className="flex items-center justify-between w-full m-3">
        <div className="ml-2 w-8 h-8 icon">{icon}</div>
        <div>{label}</div>
        <div className="ml-2 w-8 h-8" />
      </div>
    </a>
  );
};

export default Card;
