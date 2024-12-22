import InputSection from "./InputSection";

const Input = ({ type, name, placeholder }) => {
  return (
    <InputSection>
      <input
        type={type}
        name={name}
        className="form-control h-8 bg-[var(--main-color)] border border-[var(--secondary-color)] 
        text-base text-[var(--secondary-color)]"
        placeholder={placeholder}
        required
      />
    </InputSection>
  );
};

export default Input;
