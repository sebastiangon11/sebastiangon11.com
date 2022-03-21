import { Event, Timeline } from '../Timeline';
import { Badge, BADGES } from '../Badge';
import { OpacityHidder } from '../OpacityHidder';
import timeline from './timeline.json';

export const ExperienceTimeline = () => (
  <Timeline>
    {timeline.map((evt) => (
      <Event key={evt.id}>
        {evt.image && <Event.Image src={evt.image.src} alt={evt.image.alt} />}
        <Event.Time>{evt.period}</Event.Time>
        <Event.Title>
          {evt.title}
          <div className="my-2">
            {evt.badges &&
              evt.badges.length > 0 &&
              evt.badges.map((badge) => (
                <Badge key={badge} type={BADGES.INDIGO}>
                  {badge}
                </Badge>
              ))}
          </div>
        </Event.Title>
        <Event.Body>
          <OpacityHidder>
            {evt.projects &&
              evt.projects.length > 0 &&
              evt.projects.map((project) => (
                <div key={project.title} className="text-gray-500 dark:text-gray-300">
                  <p className="font-extralight">
                    <span className="font-semibold">- {project.title}</span> {project.description}
                  </p>
                  <br />
                </div>
              ))}
          </OpacityHidder>
        </Event.Body>
      </Event>
    ))}
  </Timeline>
);
