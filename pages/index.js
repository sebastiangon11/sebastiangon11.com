import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { Posts } from '../components/blog/Posts';
import Image from 'next/image';
import { ExperienceTimeline } from '../components/bio/Expecience';

export default function Home({ posts }) {
  return (
    <section>
      <div className="flex gap-x-4 items-center">
        <span className="block min-w-[50px] drop-shadow-md">
          <Image
            alt="Sebastián González"
            src="/bio/avatar.jpeg"
            width={100}
            height={100}
            className="rounded-full"
            objectFit="cover"
          />
        </span>
        <h1 className="block my-2 text-6xl">Seba González</h1>
      </div>

      <h2 className="block my-4">Frontend Engineer</h2>

      <p className="block my-4 font-extralight">
        I am a <span className="font-semibold">very</span> curious person. I like to learn about the most varied topics
        and understand how things work. <br />I love web development and I am always learning new things to apply on my
        personal projects.
      </p>

      <h2 className="block my-4">Experience</h2>
      <ExperienceTimeline />

      <h2 className="block my-4">Posts</h2>
      <Posts posts={posts} />
    </section>
  );
}

export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });

  return {
    props: {
      posts,
    },
  };
};
