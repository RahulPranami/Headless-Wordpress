import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/apollo";
import he from "he";
import {
  GET_POSTS,
  GET_MENU_ITEMS,
  GET_SITE_INFO,
  GET_NAVIGATION_MENU,
} from "@/lib/queries";
import Navbar from "@/components/Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";

export default async function Header() {
  const routes = [
    {
      href: "/",
      label: "Products",
    },
    {
      href: "/",
      label: "Categories",
    },
    {
      href: "/",
      label: "On Sale",
    },
  ];

  const response = await client.query({
    query: GET_NAVIGATION_MENU,
  });

  const siteData = await client.query({
    query: GET_SITE_INFO,
  });

  const siteInfo = siteData?.data?.generalSettings;
  const menuItems = response?.data?.menuItems?.edges;

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                {/* <Navbar menuItems={menuItems} /> */}
                {routes.map((route, i) => (
                    <Link
                      key={i}
                      href={route.href}
                      className="block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">{he.decode(siteInfo.title)}</h1>
            <p className="text-xs">{he.decode(siteInfo.description)}</p>
          </Link>
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          <Navbar menuItems={menuItems} />
        </nav>
        <div className="flex items-center">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
