import { useTheme } from "next-themes";
import { useState } from "react";
import { MoonIcon, SunIcon } from "./assets/icons";
import { socialLinks } from "./assets/socialLinks";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Input from "./components/Input";
import InputSection from "./components/InputSection";
import ScrollInfo from "./components/ScrollInfo";
import Section from "./components/Section";
import Text from "./components/Text";
import Toast from "./components/Toast";

const TOAST_MESSAGES = {
  success: "Message sent successfully",
  error: "Something went wrong. Please try again.",
};

const App = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle");
  const GALLERY = "My Gallery";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    setStatus("sending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      setStatus(response.ok ? "success" : "error");
      if (response.ok) form.reset();
    } catch {
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <>
      <Section>
        <div className="w-full flex justify-end">
          <button
            className="cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
        <img
          className="xs:block h-[70px] w-[70px] xs:h-[100px] xs:w-[100px] rounded-full overflow-hidden mb-2"
          src="https://avatars.githubusercontent.com/u/31860787?v=4"
          alt="my-pic"
        />
        <Text className="text-[1.2rem] xs:text-[2rem]" text="Ivan Silvestre" />
        <Text
          className="text-[0.9rem] sm:text-[1rem] mt-1 xs:mt-2"
          text="🇵🇹 web developer & musician 🎷"
        />
        <Text
          className="text-[0.9rem] sm:text-[1rem] mt-2 mb-6 font-bold"
          text="Signal: @ivansilvestre.01"
        />
        {socialLinks.map((item, index) => (
          <Card
            key={item.label}
            label={item.label}
            href={item.label !== GALLERY ? item.href : undefined}
            icon={item.icon}
            onClick={() => item.label === GALLERY && setIsOpen(true)}
            delay={index * 60}
          />
        ))}

        <Gallery isOpen={isOpen} onClose={() => setIsOpen(false)} />

        <ScrollInfo description="to say hi by email..." isForm={false} />
      </Section>
      <Section>
        <form
          className="mt-16 w-4/5 text-center"
          action="https://formspree.io/f/xnqyojaz"
          method="POST"
          onSubmit={handleSubmit}
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
            disabled={status === "sending"}
            className="text-[var(--secondary-color)] bg-[var(--main-color)] px-3.5 py-2 cursor-pointer
            m-4 border border-[var(--secondary-color)] hover:bg-[var(--option-color)] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <strong>{status === "sending" ? "Sending..." : "Submit"}</strong>
          </button>
        </form>
        <ScrollInfo description="back to main page" isForm />
      </Section>
      <Toast message={TOAST_MESSAGES[status]} />
    </>
  );
};

export default App;
