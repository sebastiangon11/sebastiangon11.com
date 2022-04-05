import { Event, Timeline } from '../Timeline';
import { Badge, BADGES } from '../Badge';
import timeline from './timeline.json';
import { FoldableMediaCard } from '../FoldableMediaCard/FoldableMediaCard';

export const ExperienceTimeline = () => {
  const cardsClassNames = '';

  return (
    <Timeline>
      {timeline.map((evt, i) => (
        <Event id={evt.id} key={evt.id} side={i % 2 === 1 ? 'right' : 'left'}>
          <Event.Image src={evt.image.src} alt={evt.image.alt} />
          <Event.Body>
            <FoldableMediaCard
              className="text-gray-600 dark:text-white p-2  bg-gradient-to-b from-white/20 to-white/20 dark:from-white/5 dark:to-black/5"
              imageSrc={evt.background}
            >
              <FoldableMediaCard.FixedContent className="pt-2 font-bold">
                {({ isFolded }) => (
                  <div className={isFolded ? 'text-white' : null}>
                    <time className="mb-1 text-sm font-normal leading-none">{evt.period}</time>
                    <h3 className="text-lg font-semibold">{evt.title}</h3>
                  </div>
                )}
              </FoldableMediaCard.FixedContent>
              <FoldableMediaCard.FoldableContent>
                <div className="my-2">
                  {evt.badges &&
                    evt.badges.length > 0 &&
                    evt.badges.map((badge) => (
                      <Badge key={badge} type={BADGES.INDIGO}>
                        {badge}
                      </Badge>
                    ))}
                </div>
                {evt.projects &&
                  evt.projects.length > 0 &&
                  evt.projects.map((project) => (
                    <div key={project.title}>
                      <p>
                        <span className="font-semibold">- {project.title}</span> {project.description}
                      </p>
                      <br />
                    </div>
                  ))}
              </FoldableMediaCard.FoldableContent>
            </FoldableMediaCard>
          </Event.Body>
        </Event>
      ))}
    </Timeline>
  );
};
