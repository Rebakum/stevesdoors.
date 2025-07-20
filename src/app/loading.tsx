export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen flex-col space-y-4 text-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Loading, please wait...
      </p>
    </div>
  );
}
