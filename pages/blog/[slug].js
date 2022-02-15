import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import GitHubButton from 'react-github-btn';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl as dark, stackoverflowLight as light } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { ButtonCounter } from '../../components/ButtonCounter';
import { useColorTheme } from '../../contexts/colorTheme.js';

export default function PostPage({ frontMatter: { title, date }, mdxSource }) {
  const { theme, COLOR_THEMES } = useColorTheme();

  return (
    <div className="container max-w-4xl md:mx-auto text-center">
      <h1 className="mb-4">{title}</h1>
      <h4>{date}</h4>
      <div className="container mt-8 max-w-2xl md:mx-auto text-left prose dark:prose-invert">
        <MDXRemote
          {...mdxSource}
          components={{
            ButtonCounter,
            SyntaxHighlighter: (props) => (
              <div className="container max-w-6xl md:mx-auto">
                <SyntaxHighlighter
                  {...props}
                  customStyle={{ borderRadius: 8, fontSize: '.9rem', padding: '24px 24px 24px 16px' }}
                  style={theme === COLOR_THEMES.DARK ? dark : dark}
                />
              </div>
            ),
          }}
        />
      </div>

      <GitHubButton
        href="https://github.com/sebastiangon11/sebastiangon11.com"
        data-icon="octicon-star"
        aria-label="Star sebastiangon11 on GitHub"
      >
        Star on Github
      </GitHubButton>
    </div>
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
