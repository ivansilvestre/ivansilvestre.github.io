import InputSection from "./InputSection";

const Input = ({ type, name, placeholder }) => {
  return (
    <InputSection>
      <input
        type={type}
        name={name}
        className="form-control h-8 text-base text-[var(--main-color)]"
        placeholder={placeholder}
        required
      />
    </InputSection>
  );
};

export default Input;
