"use client";

import { Link } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import squashLogo from "/images/logo-wordmark.svg";
import "./NavigationBar.css";

export function NavigationBar({ backgroundColor = "bg-background" }) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <img className={"logo"} src={squashLogo} alt="Logo" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className={"bg-currencustom"}>
          <Link href="/apps">
            <NavigationMenuLink
              style={{ backgroundColor: backgroundColor }}
              className={navigationMenuTriggerStyle()}
            >
              Apps
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/support">
            <NavigationMenuLink
              style={{ backgroundColor: backgroundColor }}
              className={navigationMenuTriggerStyle()}
            >
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/about">
            <NavigationMenuLink
              style={{ backgroundColor: backgroundColor }}
              className={navigationMenuTriggerStyle()}
            >
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
