import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import GitHubButton from 'react-github-btn';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { ButtonCounter } from '../../components/ButtonCounter';
import Head from 'next/head';

export default function PostPage({ frontMatter: { title, date, thumbnailUrl, description }, slug, mdxSource }) {
  return (
    <>
      <Head>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={title} />
        <meta property="og:image" content={`https://www.sebastiangon11.com${thumbnailUrl}`} />
        <meta property="og:url" content={`https://www.sebastiangon11.com/posts/${slug}`} />
        <meta property="og:type" content="article" />
        <meta name="twitter:alt" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`https://www.sebastiangon11.com${thumbnailUrl}`} />
      </Head>

      <div className="container max-w-4xl md:mx-auto text-center">
        <h1 className="mb-4">{title}</h1>
        <h4>{date}</h4>
        <div className="container mt-8 max-w-2xl md:mx-auto text-left prose prose-invert">
          <MDXRemote
            {...mdxSource}
            components={{
              ButtonCounter,
              SyntaxHighlighter: (props) => (
                <div className="container max-w-6xl md:mx-auto">
                  <SyntaxHighlighter
                    {...props}
                    customStyle={{ borderRadius: 8, fontSize: '.9rem', padding: '24px 24px 24px 16px' }}
                    style={nightOwl}
                  />
                </div>
              ),
            }}
          />
        </div>

        <aside
          id="default-sidebar"
          className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <ins
            className="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-6828291735302865"
            data-ad-slot="7094973188"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
        </aside>

        <span className="block mt-6">
          <GitHubButton
            href="https://github.com/sebastiangon11/sebastiangon11.com"
            data-icon="octicon-star"
            aria-label="Star sebastiangon11 on GitHub"
          >
            Star on Github
          </GitHubButton>
        </span>
      </div>
    </>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8');

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
