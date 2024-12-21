import { socialLinks } from "./assets/socialLinks";
import Card from "./components/Card";
import Input from "./components/Input";
import InputSection from "./components/InputSection";
import ScrollInfo from "./components/ScrollInfo";
import Section from "./components/Section";

const App = () => {
  return (
    <>
      <Section>
        <img
          className="h-[100px] w-[100px] rounded-full overflow-hidden mb-4"
          src="https://avatars.githubusercontent.com/u/31860787?v=4"
          alt="my-pic"
        />
        <h1 className="text-[2rem] m-0">Ivan Silvestre</h1>
        <h5 className="mt-2 mb-16">🇵🇹 web developer && musician 🎷</h5>
        {socialLinks.map((item) => (
          <Card
            key={item.label}
            label={item.label}
            href={item.href}
            icon={item.icon}
          />
        ))}
        <ScrollInfo
          description1="to say hi by email..."
          description2="( scroll page down )"
        />
      </Section>
      <Section>
        <form
          className="mt-16 w-4/5 text-center"
          action="https://formspree.io/f/xnqyojaz"
          method="POST"
        >
          <Input type="text" name="name" placeholder="Name" />
          <Input type="email" name="email" placeholder="Email" />
          <InputSection>
            <textarea
              placeholder="Message"
              className="form-control text-base text-[var(--main-color)]"
              name="message"
              rows="8"
              required
            ></textarea>
          </InputSection>
          <button
            type="submit"
            className="text-[var(--secondary-color)] bg-[var(--main-color)] px-3.5 py-2 cursor-pointer m-4 border border-[var(--secondary-color)] hover:bg-[var(--grey-color)]"
          >
            <strong>Submit</strong>
          </button>
        </form>
        <ScrollInfo
          description1="back to main page"
          description2="( scroll page up )"
        />
      </Section>
    </>
  );
};

export default App;
