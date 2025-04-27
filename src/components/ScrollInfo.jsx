import { ArrowScrollIcon } from "../assets/icons";

const ScrollInfo = ({ description, isForm }) => {
  return (
    <>
      <div className="mt-10 text-xl xs:text-2xl text-center">{description}</div>
      <div className="left-1/2 transform -translate-x-1/2 mb-2 xs:mb-4 animate-bounce mt-4 xs:mt-6 sm:mt-22">
        <ArrowScrollIcon className={isForm ? "rotate-180" : ""} />
      </div>
    </>
  );
};

export default ScrollInfo;
