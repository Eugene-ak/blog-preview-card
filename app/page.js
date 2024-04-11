import Image from "next/image";
import illustration from "../public/assets/images/illustration-article.svg";
import avatar from "../public/assets/images/image-avatar.webp";

export default function Home() {
  return (
    <main>
      <Image src={illustration} alt="preview" />
      <section>
        <h5>Learning</h5>
        <p>Published 11 Apr 2024</p>
        <h1>HTML & CSS foundations</h1>
        <article>
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </article>
      </section>
      <section>
        <Image src={avatar} alt="avatar" />
        <h5>Eugene Amedior</h5>
      </section>
    </main>
  );
}
