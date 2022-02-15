import Image from 'next/image';

const EventTime = ({ children }) => (
  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{children}</time>
);

const EventImage = ({ src, alt }) => {
  return (
    <div className="absolute h-4 w-4 -left-2 border-white dark:border-gray-900">
      <Image className="rounded-full" width={16} height={16} alt={alt} src={src} />
    </div>
  );
};

const EventTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{children}</h3>;
};

const EventBody = ({ children }) => {
  return <div className="text-base font-normal text-gray-500 dark:text-gray-300">{children}</div>;
};

const Event = ({ children }) => {
  return <li className="ml-4  mb-4">{children}</li>;
};

Event.Time = EventTime;
Event.Image = EventImage;
Event.Title = EventTitle;
Event.Body = EventBody;

const Timeline = ({ children }) => (
  <ol className="relative border-l border-gray-200 dark:border-gray-700">{children}</ol>
);

export { Event, Timeline };
