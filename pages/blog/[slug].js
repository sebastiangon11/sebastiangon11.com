import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl as dark, stackoverflowLight as light } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

import { Button } from '../../components/Button.jsx';
import { useColorTheme } from '../../contexts/colorTheme.js';

export default function PostPage({ frontMatter: { title }, mdxSource }) {
  const { theme, COLOR_THEMES } = useColorTheme();
  return (
    <div>
      <h1 className="mb-4">{title}</h1>
      <MDXRemote
        {...mdxSource}
        components={{
          Button,
          SyntaxHighlighter: (props) => (
            <SyntaxHighlighter {...props} style={theme === COLOR_THEMES.DARK ? dark : light} />
          ),
        }}
      />

      <a
        className="github-button"
        href="https://github.com/sebastiangon11/sebastiangon11.com"
        data-icon="octicon-star"
        data-size="large"
        aria-label="Star sebastiangon11/sebastiangon11.com on GitHub"
      >
        Star
      </a>
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
