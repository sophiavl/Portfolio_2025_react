import { motion } from "motion/react";
import styles from "./Contact.module.css";
import Button from "../components/Button.tsx";
import PageWrapper from "../layouts/PageWrapper.tsx";
function Contact() {
  return (
    <PageWrapper bgColor='var(--color-secondary)'>
      <motion.div
        layoutId='contact'
        className={styles.contact}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          layoutId='contact-header'
          className='page-header text-center'
          transition={{ duration: 1, ease: "easeOut" }}
        >
          LET'S GET IN TOUCH
        </motion.h1>
        <motion.p className='lightText text-center'>
          Think we could build something awesome together? I’d love to hear from
          you.
        </motion.p>
        <div className='flex gap-4 w-full justify-center items-center'>
          <Button
            label='E-MAIL'
            to='mailto:vanlieshoutsophia@gmail.com'
            className='w-1/3'
            borderColor='border-(--color-accent)'
            textColor='text-(--color-primary)'
          ></Button>
          <Button
            label='LINKEDIN'
            to='https://www.linkedin.com/in/sophia-van-lieshout-091513242/'
            newTab={true}
            className='w-1/3'
            borderColor='border-(--color-accent)'
            textColor='text-(--color-primary)'
          ></Button>
        </div>
      </motion.div>
    </PageWrapper>
  );
}

export default Contact;
