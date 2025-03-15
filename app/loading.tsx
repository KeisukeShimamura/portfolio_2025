export default function Loading() {
  return (
    <div className="animate-pulse">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-lg" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
