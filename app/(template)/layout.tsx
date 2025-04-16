export default function ExampleSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] min-h-screen">
      <header className="bg-orange-700" role="banner">
        Header
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr]">
        <nav
          className="bg-purple-900 md:min-h-[calc(100vh-auto)]"
          role="navigation"
        >
          Sidenav
        </nav>

        <main className="bg-amber-500">{children}</main>
      </div>

      <footer className="bg-teal-600" role="contentinfo">
        Footer
      </footer>
    </div>
  );
}
