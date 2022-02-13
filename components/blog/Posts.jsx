import Link from 'next/link';
import { MediaCard } from '../MediaCard';

export const Posts = ({ posts }) => (
  <div>
    {posts.map((post) => {
      const { title, description, date, thumbnailUrl, tags } = post.frontMatter;
      return (
        <Link href={`/blog/${post.slug}`} key={post.slug} passHref>
          <a>
            <MediaCard
              imgSrc={thumbnailUrl}
              imgAlt={title}
              title={title}
              description={description}
              date={date}
              tags={tags}
            />
          </a>
        </Link>
      );
    })}
  </div>
);
