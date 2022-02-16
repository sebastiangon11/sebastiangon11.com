import { Event, Timeline } from '../Timeline';

export const CoursesTimeline = () => (
  <Timeline>
    <Event>
      <Event.Image src="/bio/platzi.png" alt="Platzi logo" />
      <Event.Time>2021</Event.Time>
      <Event.Title>Typescript Fundamentals @ Platzi</Event.Title>
    </Event>
    <Event>
      <Event.Image src="/bio/platzi.png" alt="Platzi logo" />
      <Event.Time>2021</Event.Time>
      <Event.Title>Advanced React.js @ Platzi</Event.Title>
    </Event>
  </Timeline>
);
