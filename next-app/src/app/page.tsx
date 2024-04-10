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
        </div>
    );
}
