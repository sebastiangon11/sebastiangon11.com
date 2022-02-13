import { Event, Timeline } from '../Timeline';
import { Badge, BADGES } from '../Badge';

export const ExperienceTimeline = () => (
  <Timeline>
    <Event>
      <Event.Image src="/bio/peya.png" alt="Pedidos Ya logo" />
      <Event.Time>August 2020 - Present</Event.Time>
      <Event.Title>Principal Frontend Eng @ Pedidos Ya</Event.Title>
      <Event.Body>
        <div className="my-2">
          <Badge type={BADGES.GREEN}>Node JS</Badge>
          <Badge type={BADGES.YELLOW}>Javascript</Badge>
          <Badge type={BADGES.BLUE}>React</Badge>
        </div>
        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
          <p className="font-extralight">
            <span className="font-semibold">- Home Page</span> Involved in the new web home page which works with
            backend driven UI. I worked on building the web library which turns a JSON into the UI and the micro
            frontend responsible of displaying it.
          </p>
          <br />
          <p className="font-extralight">
            <span className="font-semibold">- Subcription program</span> Worked on the micro frontend of the
            subscription program which is available in the web and also in the apps as a webview. Being pioneers in this
            aspect and ensuring the quality of the product.
          </p>
          <br />
          <p className="font-extralight">
            <span className="font-semibold">- Web Team</span> Whenever I can, I contribute to cross web projects that
            help improve the development experience and the quality of the product we build in line with the
            company&apos;s OKRs and KPIs
          </p>
        </div>
      </Event.Body>
    </Event>

    <Event>
      <Event.Image src="/bio/meli.png" alt="Mercado Libre logo" />
      <Event.Time>March 2017 - August 2020</Event.Time>
      <Event.Title>Senior Frontend Eng @ Mercado Libre</Event.Title>
      <Event.Body>
        <div className="my-2">
          <Badge type={BADGES.BLUE}>React</Badge>
          <Badge type={BADGES.GREEN}>Node JS</Badge>
          <Badge type={BADGES.YELLOW}>Javascript</Badge>
          <Badge type={BADGES.INDIGO}>Web sockets</Badge>
        </div>
        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
          <p className="font-extralight">
            <span className="font-semibold">- Real time chat</span> End to end chat solution to communicate users and
            support agents with crm integration. I was in charge of building a solution proposal, its architecture,
            design and implementation. The solution consisted in two micro frontends and a micro service which used web
            sockets for the real time messaging.
          </p>
          <br />

          <p className="font-extralight">
            <span className="font-semibold">- Voip calls</span> IP calls console micro frontend for support agents and
            user facing real time call information frontend.
          </p>
          <br />

          <p className="font-extralight">
            <span className="font-semibold">- CRM Migration</span> Migration of the CRM frontend to company&apos;s new
            web architecture.
          </p>
        </div>
      </Event.Body>
    </Event>

    <Event>
      <Event.Image src="/bio/telectronica.jpeg" alt="Telectrónica logo" />
      <Event.Time>March 2017</Event.Time>
      <Event.Title>.NET Developer @ Telectrónica</Event.Title>
      <Event.Body>
        <div className="my-2">
          <Badge type={BADGES.INDIGO}>C#</Badge>
          <Badge type={BADGES.BLUE}>MS SQL</Badge>
        </div>
        <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
          Development and maintenance of .NET web applications, SQL Server database administration, remote and field
          implementation.
        </div>
      </Event.Body>
    </Event>
  </Timeline>
);
