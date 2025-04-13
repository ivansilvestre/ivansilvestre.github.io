import { ArrowScrollIcon } from "../assets/icons";

const ScrollInfo = ({ description, isForm }) => {
  return (
    <>
      <div className="mt-16 text-2xl text-center">{description}</div>
      <div className="left-1/2 transform -translate-x-1/2 mb-4 animate-bounce mt-6 md:mt-22">
        <ArrowScrollIcon className={isForm ? "rotate-180" : ""} />
      </div>
    </>
  );
};

export default ScrollInfo;
