import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Posts } from '../../components/blog/Posts';

export default function PostsPage({ posts }) {
  return (
    <section className="md:mt-8">
      <div className="container max-w-7xl md:mx-auto">
        <h1>Posts in spanish</h1>
        <br />
        <Posts posts={posts} />
      </div>
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
