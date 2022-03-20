import { Event, Timeline } from '../Timeline';
import { Badge, BADGES } from '../Badge';
import { OpacityHidder } from '../OpacityHidder';

export const ExperienceTimeline = () => (
  <Timeline>
    <Event>
      <Event.Image src="/bio/peya.png" alt="Pedidos Ya logo" />
      <Event.Time>August 2020 - Present</Event.Time>
      <Event.Title>
        Principal Frontend Engineer @ Pedidos Ya
        <div className="my-2">
          <Badge type={BADGES.INDIGO}>Node JS</Badge>
          <Badge type={BADGES.INDIGO}>Javascript</Badge>
          <Badge type={BADGES.INDIGO}>React</Badge>
        </div>
      </Event.Title>
      <Event.Body>
        <OpacityHidder>
          <div className="text-gray-500 dark:text-gray-300">
            <p className="font-extralight">
              <span className="font-semibold">- Home Page</span> Involved in the new web home page which works with
              backend driven UI. I worked on building the web library which turns a JSON into the UI and the micro
              frontend responsible of displaying it.
            </p>
            <br />
            <p className="font-extralight">
              <span className="font-semibold">- Subcription program</span> Worked on the micro frontend of the
              subscription program which is available in the web and also in the apps as a webview. Being pioneers in
              this aspect and ensuring the quality of the product.
            </p>
            <br />
            <p className="font-extralight">
              <span className="font-semibold">- Web Team</span> I contribute to cross company web projects that help
              improve the development experience and the quality of the product we build in line with the company&apos;s
              OKRs and KPIs
            </p>
          </div>
        </OpacityHidder>
      </Event.Body>
    </Event>

    <Event>
      <Event.Image src="/bio/meli.png" alt="Mercado Libre logo" />
      <Event.Time>March 2017 - August 2020</Event.Time>
      <Event.Title>
        Senior Frontend Engineer @ Mercado Libre
        <div className="my-2">
          <Badge type={BADGES.INDIGO}>React</Badge>
          <Badge type={BADGES.INDIGO}>Node JS</Badge>
          <Badge type={BADGES.INDIGO}>Javascript</Badge>
          <Badge type={BADGES.INDIGO}>Web sockets</Badge>
        </div>
      </Event.Title>
      <Event.Body>
        <OpacityHidder>
          <div className="text-gray-500 dark:text-gray-300">
            <p className="font-extralight">
              <span className="font-semibold">- Real time chat</span> End to end chat solution to communicate users and
              support agents with crm integration. I was in charge of building a solution proposal, its architecture,
              design and implementation. The solution consisted in two micro frontends and a micro service which used
              web sockets for the real time messaging.
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
        </OpacityHidder>
      </Event.Body>
    </Event>

    <Event>
      <Event.Image src="/bio/telectronica.jpeg" alt="Telectrónica logo" />
      <Event.Time>March 2017</Event.Time>
      <Event.Title>
        .NET Developer @ Telectrónica
        <div className="my-2">
          <Badge type={BADGES.INDIGO}>C#</Badge>
          <Badge type={BADGES.INDIGO}>MS SQL</Badge>
        </div>
      </Event.Title>
      <Event.Body>
        <OpacityHidder>
          <div className="text-gray-500 dark:text-gray-300">
            <p className="font-extralight">
              Development and maintenance of .NET web applications, SQL Server database administration, remote and field
              implementation.
            </p>
          </div>
        </OpacityHidder>
      </Event.Body>
    </Event>

    <Event>
      <Event.Image src="/bio/um.jpeg" alt="Universidad de Morón Ya logo" />
      <Event.Time>2013 - 2020</Event.Time>
      <Event.Title>Computer Science @ Universidad de Morón</Event.Title>
      <Event.Body>
        <OpacityHidder>Computer science student</OpacityHidder>
      </Event.Body>
    </Event>
  </Timeline>
);
