import Link from 'next/link';
import { MediaCard } from '../MediaCard';

export const Posts = ({ posts }) => {
  return (
    <div className="relative grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6 mx-auto max-w-7xl gap-y-16">
      {posts.map((post) => {
        const { title, description, date, thumbnailUrl, tags } = post.frontMatter;
        return (
          <div key={post.slug} className="col-span-4">
            <Link href={`/blog/${post.slug}`} passHref>
              <a className="inline-block cursor-pointer">
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
          </div>
        );
      })}
    </div>
  );
};
