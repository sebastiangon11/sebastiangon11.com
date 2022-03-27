import React from 'react';
import Image from 'next/image';

const EventTime = ({ children }) => (
  <time className="mb-1 text-sm font-normal leading-none text-gray-700 ">{children}</time>
);

const EventTitle = ({ children }) => {
  return <h3 className="text-lg font-semibold text-gray-600 ">{children}</h3>;
};

const EventBody = ({ children }) => {
  return <div className="text-base font-normal text-gray-700">{children}</div>;
};

const EventImage = ({ src, alt }) => {
  return (
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-slate-600 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full shadow overflow-hidden">
        <Image width={24} height={24} src={src} alt={alt} />
      </div>
    </div>
  );
};

const Event = ({ children, side, background }) => {
  const right = side === 'right';

  const sideContainerClass = right ? 'flex-row' : 'flex-row-reverse';
  const sideCardClass = right ? 'col-start-6 col-end-10 mr-auto' : 'col-start-1 col-end-5 ml-auto';

  const image = React.Children.toArray(children).find((child) => child.type === EventImage);
  const time = React.Children.toArray(children).find((child) => child.type === EventTime);
  const title = React.Children.toArray(children).find((child) => child.type === EventTitle);
  const body = React.Children.toArray(children).find((child) => child.type === EventBody);

  const cardJSX = (
    <div className={`relative min-h-max max-w-80 shadow-md rounded-xl my-4 overflow-hidden ${sideCardClass}`}>
      <div
        style={{ backgroundImage: `url('${background}')` }}
        className={`absolute bg-red-50 inset-0 w-full h-full bg-cover grayscale-[70%] blur-[3px]`}
      ></div>
      <div className="relative p-4 bg-[rgba(255,255,255,0.5)]">
        {time}
        {title}
        {body}
      </div>
    </div>
  );

  return (
    <>
      <div className={`flex md:contents ${sideContainerClass}`}>
        {right ? image : cardJSX}
        {right ? cardJSX : image}
      </div>
    </>
  );
};

Event.Time = EventTime;
Event.Image = EventImage;
Event.Title = EventTitle;
Event.Body = EventBody;

const Timeline = ({ children }) => (
  <div className="container">
    <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50">{children}</div>
  </div>
);

export { Event, Timeline };
