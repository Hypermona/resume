import React from "react";
import Description from "./Description";
import Link from "next/link";

interface Contact {
  email: string;
  tel: string;
  social: readonly SocialLink[];
}

interface SocialLink {
  name: string;
  url: string;
  icon: string | null;
}

export interface UserProfile {
  name: string;
  location: string;
  locationLink: string;
  about: string;
  summary: readonly string[];
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: Contact;
}

function Header({
  name,
  about,
  contact,
  location,
  locationLink,
  personalWebsiteUrl,
  summary,
}: UserProfile) {
  return (
    <header>
      <div>
        <div>
          <h1 className="text-3xl tracking-tight font-bold">{name}</h1>
          <Description text={about} size="lg" />
          <Link href={locationLink}>
            <Description text={location} size="sm" />
          </Link>
        </div>
        <Link href={personalWebsiteUrl}>
          {/* <Image width={200} height={200} alt={name} src={avatarUrl} /> */}
        </Link>
        {JSON.stringify(contact)}
      </div>
      <br />
      <h2 className="text-2xl tracking-tight font-semibold">About</h2>
      <Description text={summary} size="lg" />
    </header>
  );
}

export default Header;
