import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

import { Posts } from '../components/blog/Posts';
import { ExperienceTimeline } from '../components/bio/ExperienceTimeline';
import { LinkedinBadge } from '../components/bio/LinkedinBadge';
import { GithubBadge } from '../components/bio/GithubBadge';

export default function Home({ posts }) {
  return (
    <section>
      <div className="container max-w-xl md:mx-auto">
        <div className="flex gap-x-4 items-center">
          <span className="block min-w-[50px]">
            <Image
              alt="Sebastián González"
              src="/bio/avatar.gif"
              width={100}
              height={100}
              className="rounded-full"
              objectFit="cover"
            />
          </span>
          <h1 className="block my-2 text-6xl">Seba González</h1>
        </div>

        <div className="flex gap-x-2 items-center justify-between">
          <h2 className="my-4">
            Software Engineer. <span className="inline-block font-extralight">Frontend passionate.</span>
          </h2>
          <div className="flex">
            <LinkedinBadge />
            <GithubBadge />
          </div>
        </div>

        <p className="block mt-2 mb-6 font-normal shadow-md py-2 px-4 rounded">
          I am a <span className="font-semibold">very</span> curious person 🧐
          <br />
          who likes to understand how things work ⚙️,
          <br />
          loves web development 🕸️
          <br />
          and is always learning new things to apply on personal projects 🚀
        </p>

        <h2 className="block my-4">Work experience</h2>
        <ExperienceTimeline />
      </div>

      <h2 className="mx-auto max-w-7xl block my-4">Posts</h2>
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
