import Link from "next/link";

// Global 404 Page
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center py-100 gap-3">
      <h1 className="text-3xl">Page Not Found</h1>
      <p className="text-xl">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        href="/newsletter"
        aria-label="Return to home page"
        className="site-link"
      >
        Back to Home
      </Link>
    </div>
  );
}
