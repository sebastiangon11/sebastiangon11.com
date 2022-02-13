import Image from 'next/image';
import { Badge, BADGES } from './Badge';

export const MediaCard = ({ imgSrc, imgAlt, title, description, date, tags = [] }) => (
  <div className="inline-block cursor-pointer max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <Image width={500} height={300} className="rounded-t-lg" src={imgSrc} alt={imgAlt || title || 'post image'} />
    <div className="p-5">
      <p className="font-extralight text-sm">{date}</p>
      <h3 className="my-2 tracking-tight text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-3 text-gray-700 dark:text-gray-400">{description}</p>
      {tags.map((tag) => (
        <Badge type={BADGES.PURPLE} key={tag}>
          {tag}
        </Badge>
      ))}
    </div>
  </div>
);
