import Link from 'next/link';
import GithubIcon from '../../icons/github.svg';

export const GithubBadge = () => (
  <Link passHref href="https://www.github.com/sebastiangon11/">
    <a target="_blank">
      <GithubIcon className="fill-slate-100" width="30px" height="30px" role="img" />
    </a>
  </Link>
);
