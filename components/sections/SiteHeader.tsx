import Image from "next/image";
import abstractlyLogo from "./images/abstractly-logo.svg";

export default function SiteHeader() {
  return (
    <header className="h-full flex items-center px-4" role="banner">
      <Image
        src={abstractlyLogo}
        alt="Abstractly Company Logo"
        className="w-[230px]"
        priority={true}
      />
    </header>
  );
}
