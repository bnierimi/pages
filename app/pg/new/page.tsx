export default function NewPage() {
  return (

    // (app page)
    <main className="h-screen md:h-full w-full md:w-5/12 px-4 md:mx-auto relative flex  items-center justify-center space-y-4 overflow-y-auto">
      
      <section className="w-full h- border border-zinc-300 dark:border-zinc-500/40 rounded-2xl space-y-4">
        
        {/* (app page): title */}
        <div className="space-x-2 flex items-center bg-amber-500 text-zinc-700 dark py-3 px-4 rounded-t-2xl">
          <i className="icon icon-ic_fluent_add_20_filled flex text-xl"></i>
          <h3 className="font-medium">New Page</h3>
        </div>

        {/* (app page): form */}
        <form action="/" className="w-full">
          <div className="w-full px-4 pb-4 space-y-4">

            {/* (app page): pageTitle input */}
            <div className="w-full space-y- flex flex-col">
              <label htmlFor="pageTitle" className="text-sm opacity-60">Title</label>
              <input type="text" name="pageTitle" id="pageTitle" required className="w-full rounded-full p-2 bg-transparent border border-zinc-300 dark:border-zinc-500/30 focus:outline-none focus:ring-1 focus:ring-violet-600" />
            </div>

            {/* (app page): pageTitle select tags */}
            <div className="hidden w-full space-y- flex flex-col">
              <label htmlFor="pageTags" className="text-sm opacity-60">Select Tags</label>
              <select multiple name="pageTags" id="pageTags" className="w-full rounded-full p-2 bg-transparent border border-zinc-300 dark:border-zinc-500/30 focus:outline-none focus:ring-1 focus:ring-violet-600">
                <option value="tag-1">moby dick</option>
                <option value="tag-2">2023</option>
                <option value="tag-3">log.book</option>
              </select>
            </div>

            {/* (app page): submit btn */}
            <button title="Create" className="py-2 px-4 font-medium relative bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600"> Create
            </button>
          </div>
        </form>

      </section>

    </main>
  )
}
