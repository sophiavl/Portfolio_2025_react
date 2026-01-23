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
      <div className='flex flex-col gap-4 2xl:flex-row 2xl:pt-48'>
        {contactOptions.map((option, i) => (
          <a
            key={i}
            href={option.link}
            target='_blank'
            rel='noopener noreferrer'
            className='contact-block border border-(--color-secondary) flex items-center justify-center transition-transform duration-300 bg-(--color-primary) text-(--color-secondary) w-full h-48 2xl:w-1/3'
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Contact;
