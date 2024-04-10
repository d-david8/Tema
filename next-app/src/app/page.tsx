import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
} from "@/components/ui/menubar"

<<<<<<< HEAD
export default function Home(props: any) {

    const a = [1, 2, 3, 4, 5, 6];
    return (
        <div>
            {props.children}
            {/* <nav className="flex flex-wrap items-center justify-between p-3 bg-teal-200">
                <img src="https://tailwindflex.com/public/favicon.ico" class="h-10 w-10" alt="ACME" width="120" />
                <div class="flex md:hidden">
                    <button id="hamburger">
                        <img class="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
                        <img class="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
                    </button>
                </div>
                <div
                    class="toggle hidden w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
                    <a href="#"
                        class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home
                    </a>
                    <a href="#"
                        class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products
                    </a>
                    <a href="#"
                        class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing
                    </a>
                    <a href="#"
                        class="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact
                    </a>
                </div>
                <a href="#"
                    class="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Create
                    Account

                </a>
            </nav> */}
=======
export default function Home() {
    let a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    let e=0;
    for (let index = 0; index < a.length; index++) {
        e += a[index];
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between  pt-72">
            {/* <div className="container flex h-14 max-w-screen-2xl items-center border-cyan-950"> */}
            {
                a.map(num => ( <Button key={num}>
                    Hello {num}
                </Button>))
             }
            {/* </div> */}

        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
>>>>>>> 247d0a4 (about)
        </div>
    );
}
