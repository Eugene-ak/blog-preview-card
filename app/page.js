import Image from "next/image";
import style from "./page.module.css";
import illustration from "../public/assets/images/illustration-article.svg";
import avatar from "../public/assets/images/image-avatar.webp";

export default function Home() {
  return (
    <main className={style.main}>
      <Image src={illustration} className={style.image} alt="preview" />
      <section className={style.section}>
        <h5 className={style.tag}>Learning</h5>
        <p className={style.publish}>Published 11 Apr 2024</p>
        <h1 className={style.heading}>HTML & CSS foundations</h1>
        <article className={style.article}>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </article>
      </section>
      <footer className={style.footer}>
        <Image src={avatar} className={style.avatar} alt="avatar" />
        <h5 className={style.author}>Eugene Amedior</h5>
      </footer>
    </main>
  );
}
