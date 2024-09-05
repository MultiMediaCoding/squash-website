import { App } from "./App";
import { bodenseeTemperatur } from "./apps/BodenseeTemperatur";
import { hiddenDesk } from "./apps/HiddenDesk";
import { isymbols } from "./apps/iSymbols";
import { notely } from "./apps/Notely";
import { skationary } from "./apps/Skationary";

export const apps: App[] = [
  hiddenDesk,
  skationary,
  isymbols,
  notely,
  bodenseeTemperatur,
];
