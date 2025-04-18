import Credits from "../elements/Credits";

export default function SiteFooter() {
  const companyName = "Abstractly, Inc.";
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white h-full flex justify-center items-center px-4"
      role="contentinfo"
    >
      <p className="font-light text-md">
        &copy; {currentYear} {companyName}. All rights reserved.
      </p>
      <Credits />
    </footer>
  );
}
