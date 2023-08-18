import Link from "next/dist/client/link";
import { Image } from "next/dist/client/image-component";
import WebLogo from '../public/logo.svg';
import { NavLinks } from "../Constants";
import AuthProviders from './AuthProviders';

const Navbar = () => {
  const session={

  }
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src={WebLogo}
            width={115}
            height={43}
            alt="Flexibble"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link)=>(
            <Link
            href={link.href}
            key={link.key}>
            {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session ? (
          <>
          userPhoto
          <Link href='./create-project'>
            Share Project
          </Link>
          </>
        ) : (<AuthProviders />)}
      </div>
    </nav>
  );
};

export default Navbar;
