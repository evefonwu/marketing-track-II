export default function ExampleSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 grid-rows-[100px_1fr_100px] min-h-screen">
      <header
        className="bg-orange-700 font-bold text-3xl text-center"
        role="banner"
      >
        Header
      </header>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr]">
        <nav
          className="bg-purple-900 font-bold text-3xl text-center"
          role="navigation"
        >
          Sidenav
        </nav>

        <main className="bg-amber-500 font-bold text-3xl text-center">
          {children}
        </main>
      </div>

      <footer
        className="bg-teal-600 font-bold text-3xl text-center"
        role="contentinfo"
      >
        Footer
      </footer>
    </div>
  );
}
