import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

import { Posts } from '../components/blog/Posts';
import { ExperienceTimeline } from '../components/bio/ExperienceTimeline';
import Head from 'next/head';

const DURATION = 300;
const DELAY = 50;

const getAnimationStyles = (duration, delay) => {
  return {
    animationDuration: `${duration}ms`,
    animationDelay: `${delay}ms`,
  };
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta property="og:title" content="Seba González" />
        <meta property="og:description" content="Software engineer. Frontend passionate" />
        <meta property="og:image" content="https://www.sebastiangon11.com/bio/avatar.gif" />
        <meta property="og:url" content="https://www.sebastiangon11.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:alt" content="Seba González" />
        <meta name="twitter:title" content="Seba González" />
        <meta name="twitter:description" content="Software engineer. Frontend passionate" />
        <meta name="twitter:image" content="https://www.sebastiangon11.com/bio/avatar.gif" />
      </Head>
      <section className="md:mt-8">
        <div>
          <div className="flex gap-x-4 items-center opacity-0 fadeInUp" style={getAnimationStyles(DURATION, 0)}>
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
            <h1 className="block my-2 text-6xl ">Seba González</h1>
          </div>

          <h2 className="my-4 opacity-0 fadeInUp" style={getAnimationStyles(DURATION, DELAY)}>
            Software engineer. <span className="inline-block font-extralight">Frontend passionate.</span>
          </h2>

          <p
            className="block mt-2 mb-6 font-normal leading-9 opacity-0 fadeInUp"
            style={getAnimationStyles(DURATION, DELAY)}
          >
            I am a <span className="font-semibold">very</span> curious person who likes to understand how things work,
            loves web development and is always learning new things to apply on personal projects 🚀
          </p>

          <div
            className="relative mx-auto max-w-7xl opacity-0 fadeInUp"
            style={getAnimationStyles(DURATION, DELAY * 2)}
          >
            <div>
              <h2 className="block my-4">Tech timeline</h2>
              <ExperienceTimeline />
            </div>
          </div>
        </div>

        <div className="opacity-0 fadeInUp" style={getAnimationStyles(DURATION, DELAY * 2)}>
          <h2 className="mx-auto max-w-7xl block my-4">Posts in spanish</h2>
          <Posts posts={posts.filter((p) => p.frontMatter.language === 'ES')} />
        </div>
      </section>
    </>
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
