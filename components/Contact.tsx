export default function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              メッセージ
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full hover:bg-gray-700 dark:hover:bg-gray-300 transition-colors"
          >
            送信する
          </button>
        </form>
      </div>
    </section>
  );
}
