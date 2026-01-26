import Button from "../components/Button";

function Contact() {
  const contactOptions = [
    { label: "E-MAIL", link: "mailto:vanlieshoutsophia@gmail.com" },
    {
      label: "LINKEDIN",
      link: "https://www.linkedin.com/in/sophia-van-lieshout-091513242/",
    },
    { label: "GITHUB", link: "https://github.com/sophiavl" },
  ];

  return (
    <div className='flex flex-col pt-24 gap-12 px-8 h-[93dvh] 2xl:px-28'>
      <div className='flex flex-col'>
        <h1 className='hero-name text-(--color-accent)'>CONTACT</h1>
        <p>LET'S GET IN TOUCH!</p>
      </div>
      <div className='flex flex-col gap-4 lg:flex-row 2xl:pt-'>
        {contactOptions.map((option, i) => (
          <Button
            key={i}
            newTab={true}
            className='w-auto h-30 lg:w-1/3 lg:h-40'
            label={option.label}
            to={option.link}
          ></Button>
        ))}
      </div>
    </div>
  );
}

export default Contact;
