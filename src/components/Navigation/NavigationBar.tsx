"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import "./NavigationBar.css";

export function NavigationBar({ backgroundColor = "bg-background" }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink href="/">
            <img className="logo" src="/images/logo-wordmark.svg" alt="Logo" />
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="bg-currencustom">
          <NavigationMenuLink
            href="/apps"
            style={{ backgroundColor: backgroundColor }}
            className={navigationMenuTriggerStyle()}
          >
            Apps
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/support"
            style={{ backgroundColor: backgroundColor }}
            className={navigationMenuTriggerStyle()}
          >
            Support
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            style={{ backgroundColor: backgroundColor }}
            className={navigationMenuTriggerStyle()}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
