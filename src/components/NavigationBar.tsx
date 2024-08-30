"use client";

import { Link } from "@radix-ui/react-navigation-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";
import squashLogo from "../assets/squash-logo.svg";
import "./NavigationBar.css";

export function NavigationBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/">
            <img className={"logo"} src={squashLogo} alt="Logo" />
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://google.de">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Apps
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="https://google.de">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Support
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="about">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
