const Section = ({ children }) => {
  return (
    <section className="container my-5 rounded-2xl bg-section-light-blue bg-opacity-30 px-5 py-8 md:py-12">
      {children}
    </section>
  );
};

export default Section;
