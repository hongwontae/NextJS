import classes from "./hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
            <Image src='/images/site/HWT.png' alt="HWT" width={300} height={300}></Image>
        </div>
        <h1>Hi, I'm HWT</h1>
        <p>
          I blog about web development - especially fronted frameworks like
          Angular or React
        </p>
      </section>
    </>
  );
}

export default Hero;
