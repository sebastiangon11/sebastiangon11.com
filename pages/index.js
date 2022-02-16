import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

import { Posts } from '../components/blog/Posts';
import { ExperienceTimeline } from '../components/bio/ExperienceTimeline';
import { StudiesTimeline } from '../components/bio/StudiesTimeline';
import { CoursesTimeline } from '../components/bio/CoursesTimeline';
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
        <meta property="og:image" content="https://www.sebastiangon11.com/bio/avatar.jpeg" />
        <meta property="og:url" content="https://www.sebastiangon11.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:alt" content="Seba González" />
        <meta name="twitter:title" content="Seba González" />
        <meta name="twitter:description" content="Software engineer. Frontend passionate" />
        <meta name="twitter:image" content="https://www.sebastiangon11.com/bio/me.jpeg" />
      </Head>
      <section className="md:mt-8">
        <div className="container max-w-7xl md:mx-auto">
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
            I am a <span className="font-semibold">very</span> curious person who likes to understand how things work
            loves web development and is always learning new things to apply on personal projects 🚀
          </p>

          <div
            className="relative mx-auto max-w-7xl grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 gap-y-16 opacity-0 fadeInUp"
            style={getAnimationStyles(DURATION, DELAY * 2)}
          >
            <div className="max-w-lg col-span-4 md:col-span-8 lg:col-span-6">
              <h2 className="block my-4">Work experience</h2>
              <ExperienceTimeline />
            </div>

            <div className="max-w-lg col-span-4 md:col-span-8 lg:col-span-6">
              <h2 className="block my-4">Studies</h2>
              <StudiesTimeline />
              <br />
              <h2 className="block my-4">Courses</h2>
              <CoursesTimeline />
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
