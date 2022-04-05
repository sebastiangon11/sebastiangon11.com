import Link from 'next/link';
import LinkedinIcon from '../../icons/linkedin.svg';

export const LinkedinBadge = () => (
  <Link passHref href="https://www.linkedin.com/in/sebastiangon11/">
    <a target="_blank">
      <LinkedinIcon aria-label="Linkedin profile" className="fill-slate-100" width="30px" height="30px" role="img" />
    </a>
  </Link>
);
