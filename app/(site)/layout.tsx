import SiteFooter from "@/components/sections/SiteFooter";
import SiteHeader from "@/components/sections/SiteHeader";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-[100px_1fr_200px] min-h-screen">
      <SiteHeader />
      <div className="grid grid-cols-1">
        <main className="">{children}</main>
      </div>
      <SiteFooter />
    </div>
  );
}
