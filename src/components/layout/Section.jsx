import Container from "./Container";

const Section = ({
  children,
  className = "",
  containerClass = "",
  id = "",
}) => {
  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${className}`}>
      <Container className={containerClass}>{children}</Container>
    </section>
  );
};

export default Section;
