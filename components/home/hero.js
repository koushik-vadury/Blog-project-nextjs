import classes from "./hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/koushik_vaduri.png"
          alt="koushik vadury"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Koushik</h1>
      <p>
        I blog about web development- especially frontend frameworks like
        Reactjs
      </p>
    </section>
  );
};

export default Hero;
