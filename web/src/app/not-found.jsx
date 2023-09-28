export default function Custom404() {
    return (
        <div className="container mx-auto max-w-3xl py-8 flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">Oops 😲</h1>
            <p className="mt-3 text-center text-gray-600 dark:text-white">It looks like you are go into an unknown
                page.</p>
            <button type="button"
                    className="py-2.5 px-5 mt-6 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <a href="/">Back to Main</a>
            </button>
        </div>
    )
}