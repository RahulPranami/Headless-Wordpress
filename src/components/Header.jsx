import Link from "next/link";
import { Button } from "@/components/ui/button";
import { client } from "@/lib/apollo";
import {
  GET_POSTS,
  GET_MENU_ITEMS,
  GET_SITE_INFO,
  GET_NAVIGATION_MENU,
} from "@/lib/queries";

import Navbar from "@/components/Navbar";

function MenuItem({ item }) {
  console.log(item);
  return (
    <li key={item.id}>
      <a href={item.url}>{item.label}</a>
      {item?.childItems?.edges.length > 0 && (
        <ul>
          {item?.childItems?.edges?.map((childItem) => (
            <MenuItem key={childItem.id} item={childItem.node} />
          ))}
        </ul>
      )}
    </li>
  );
}

function MenuItems({ items }) {
  console.log(items);

  if (items.parentId == null) {
    return (
      <Button asChild variant="ghost">
        <Link
          key={items.id}
          href={items.url}
          className="text-sm font-medium transition-colors"
        >
          {items.label}
        </Link>
      </Button>
    );
    return <li>{items.label}</li>;
  }
  // if (items.parentId) {
  //   return (
  //     <ul>
  //       {items.childItems.edges.map((item) => (
  //         <MenuItems key={item.node.id} items={item.node} />
  //       ))}
  //     </ul>
  //   );
  // }
}

export default async function Header() {
  const response = await client.query({
    query: GET_NAVIGATION_MENU,
  });
  // const menu = response?.data?.posts?.nodes;
  const menuItems = response?.data?.menuItems?.edges;

  // console.log(menuItems);

  return (
    <header className="sm:flex sm:justify-between py-3 px-4 border-b">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full">
        <div className="flex items-center">
          <Link href="/" className="ml-4 lg:ml-0">
            <h1 className="text-xl font-bold">Headless Wordpress</h1>
          </Link>
        </div>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 hidden md:block">
          {/* {menuItems.map((item) => ( */}
            <Navbar menuItems={menuItems} />
          {/* ))} */}
          {/* {menuItems.map((item) => (
            <MenuItem key={item.node.id} item={item} />
          ))} */}
          {/* {menu.map((route, i) => (
            <Button asChild variant="ghost">
              <Link
                key={i}
                href={route.href}
                className="text-sm font-medium transition-colors"
              >
                {route.label}
              </Link>
            </Button>
          ))} */}
        </nav>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2"
            aria-label="Shopping Cart"
          >
            Cart
          </Button>
        </div>
      </div>
    </header>
  );
}
