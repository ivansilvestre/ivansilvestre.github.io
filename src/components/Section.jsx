const Section = ({ children }) => {
  return (
    <section className="flex justify-center h-screen w-full snap-start">
      <div className="w-full mt-6 max-w-2xl flex flex-col items-center">
        {children}
      </div>
    </section>
  );
};

export default Section;
