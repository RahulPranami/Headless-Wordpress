"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navbar({ menuItems }) {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavbarItem
              key={item.node.id}
              item={item.node}
              link={item.node.uri}
            />
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Link</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Sub Item</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <NavigationMenuLink>Sub Link</NavigationMenuLink>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
}

function NavbarItem({ item, link }) {
  if (item.parentId) {
    return;
  }
  return (
    <NavigationMenuItem>
      {item?.childItems?.edges.length > 0 ? (
        <>
          <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>

          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {item?.childItems?.edges.map((childItem) => {
                console.log(childItem.node);
                return (
                  <NavbarItem
                    key={childItem.node.id}
                    item={childItem.node}
                    link={childItem.node.uri}
                  />
                );
              })}
            </ul>
          </NavigationMenuContent>
        </>
      ) : (
        <Link href={link} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            {item.label}
          </NavigationMenuLink>
        </Link>
      )}
    </NavigationMenuItem>
  );
}
