import Button from "../components/Button";

function Contact() {
  const contactOptions = ["E-MAIL", "LINKEDIN", "GITHUB"];

  return (
    <div className='flex flex-col pt-24 gap-12 px-8 h-[93dvh] 2xl:px-28'>
      <div className='flex flex-col'>
        <h1 className='text-(--color-accent)'>CONTACT</h1>
        <p>LET'S GET IN TOUCH!</p>
      </div>
      <div className='flex flex-col gap-4 2xl:flex-row pt-48'>
        {contactOptions.map((option, i) => (
          <Button
            label={option}
            className='contact-block h-48 2xl:w-1/3'
          ></Button>
        ))}
      </div>
    </div>
  );
}

export default Contact;
