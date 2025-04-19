import { useTheme } from "next-themes";
import { useState } from "react";
import { MoonIcon, SunIcon } from "./assets/icons";
import { images } from "./assets/images";
import { socialLinks } from "./assets/socialLinks";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Input from "./components/Input";
import InputSection from "./components/InputSection";
import ScrollInfo from "./components/ScrollInfo";
import Section from "./components/Section";
import Text from "./components/Text";

const App = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const GALLERY = "My Gallery";

  return (
    <>
      <Section>
        <div className="w-full flex justify-end">
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <img
          className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] rounded-full overflow-hidden mb-2"
          src="https://avatars.githubusercontent.com/u/31860787?v=4"
          alt="my-pic"
        />
        <Text className="text-[1.2rem] sm:text-[2rem]" text="Ivan Silvestre" />
        <Text
          className="text-[0.9rem] sm:text-[1rem] mt-1 mb-4 sm:mt-2 sm:mb-10"
          text="🇵🇹 web developer & musician 🎷"
        />
        {socialLinks.map((item) => (
          <Card
            key={item.label}
            label={item.label}
            href={item.label !== GALLERY ? item.href : undefined}
            icon={item.icon}
            onClick={() => item.label === GALLERY && setIsOpen(true)}
          />
        ))}

        <Gallery
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          images={images}
        />

        <ScrollInfo description="to say hi by email..." isForm={false} />
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
              className="form-control bg-[var(--main-color)] border border-[var(--secondary-color)] 
              text-base text-[var(--secondary-color)]"
              name="message"
              rows="8"
              required
            ></textarea>
          </InputSection>
          <button
            type="submit"
            className="text-[var(--secondary-color)] bg-[var(--main-color)] px-3.5 py-2 cursor-pointer 
            m-4 border border-[var(--secondary-color)] hover:bg-[var(--option-color)]"
          >
            <strong>Submit</strong>
          </button>
        </form>
        <ScrollInfo description="back to main page" isForm />
      </Section>
    </>
  );
};

export default App;
