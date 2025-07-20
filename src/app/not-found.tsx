import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-8xl font-bold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Sorry, we couldn’t find the page you were looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-sm transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}
