import './globals.css'
// import '@/public/fonts/style.css'
import '@/public/lib/trse/style.css'
import '@/public/lib/fluent/FluentSystemIcons-Resizable.css'
// import '@/public/lib/flowbite/flowbite.min.js'

import Link from 'next/link'

import Avatar from 'boring-avatars'
import ThemeBtn from '@/components/ThemeBtn'
import MoreApps from '@/components/MoreApps'
import Account from '@/components/Account'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import { cavolini, didactGothic, instrumentSans, monaco, poppins, questrial, sfProDisplay, trialByCupcakes } from '@/styles/fonts'

export const metadata = {
  title: 'Tcitrogg-app',
  description: 'App created by Tcitrogg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${sfProDisplay.className} font-sans bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200 overflow- `}>

        {/* (frame) */}
        <section className="w-full h-smscreen md:h-screen md:space-x-2 md:p-2 flex">

          {/* (frame): left aside */}
          <aside className="lg:w-3/12 md:w-4/12 h-full hidden md:flex flex-col rounded-xl space-y-2">

            {/* ~ aside: header */}
            <header className="w-full relative bg-zinc-200 dark:bg-zinc-500/20 py-1.5 pr-1.5 pl-4 flex items-center justify-between rounded-full">

              {/* ~ header: title */}
              <h1 className="text-lg font-medium flex items-center space-x-2">
                <div className="text-zinc-500dark:text-zinc-300 rounded-md flex items-center space-x2">
                  <p className="opacity-50">Tcitrogg</p>
                </div>
                <span className="p-0.5 rounded-full bg-zinc-500 dark:bg-zinc-400"></span>
                <span className="font-semibold">Pages</span>
              </h1>
              
              <div className="md:block lg:hidden">
                <button title='Account' className="flex rounded-full p-1 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <Avatar
                    size={25}
                    name={`shisho`}
                    variant="bauhaus"
                  />
                </button>
              </div>
            </header>

            {/* ~ aside: board */}
            <section className="w-full h-full flex flex-col justify-between bg-zinc-200 dark:bg-zinc-500/20 rounded-2xl p-2">
              
              {/* ~ board: upper division */}
              <div className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">

                  {/* ~ upper division: <lg> create new page's btn */}
                  <Link href="/pg/new" title="New Page" className="w- p-2 pr-3 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600 flex items-center space-x-2">
                    <i className="icon icon-ic_fluent_add_20_filled flex text-xl"></i>
                    <p className="font-semibold">New page</p>
                  </Link>
                  
                  {/* ~ upper division: <lg> theme btn */}
                  <div className="flex items-center space-x-2">
                    <ThemeBtn/>
                  </div>
                </div>

                {/* ~ upper division: other btns */}
                <section className="w-full space-y-1">
                  <Link href="/archive" className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                    <i className="icon icon-ic_fluent_archive_20_regular flex text-xl"></i>
                    <p className="font-medium">Archive</p>
                  </Link>
                  <Link href="/bin" className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                    <i className="icon icon-ic_fluent_delete_20_regular flex text-xl"></i>
                    <p className="font-medium">Bin</p>
                  </Link>
                  <div className="w-full md:block lg:hidden">
                    <MoreApps isLong={true}/>
                  </div>
                </section>
              </div>
              
              {/* ~ board: lower division */}
              <div className="w-full space-y-1">
                <Link href="/" className="flex rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <div className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl">
                    <i className="icon icon-ic_fluent_info_20_regular flex text-xl"></i>
                    <p className="font-medium">Help and feedback</p>
                  </div>
                </Link>
              </div>
              
            </section>
            
          </aside>

          {/* (frame): body holder */}
          <div className="w-full lg:w-9/12 md:w-8/12 h-full md:bg-zinc-200 dark:md:bg-zinc-500/20 rounded-2xl">
            {children}
          </div>

          {/* (frame): right aside */}
          {/* right aside might by sandwiched into the left aside */}
          <div className="h-full hidden lg:block md:py-10">
            <div className="h-full w-full md:flex flex-col items-center justify-between rounded-full bg-zinc-200 dark:bg-zinc-500/20 p-1">
            <section className="">
              <MoreApps/>
            </section>

            <section className="">

              {/* (frame): account */}
              <Account/>
            </section>
            </div>
          </div>

        </section>

        <script src="../public/lib/flowbite/flowbite.min.js"></script>
      </body>

    </html>
  )
}
