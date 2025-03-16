import { App } from "./App";
import { bodenseeTemperatur } from "./apps/BodenseeTemperatur";
import { hiddenDesk } from "./apps/HiddenDesk";
import { isymbols } from "./apps/iSymbols";
import { notely } from "./apps/Notely";
import { skationary } from "./apps/Skationary";
import { itask } from "./apps/iTask";
import { lindenhofpark } from "./apps/Lindenhofpark";
import { loipen } from "./apps/Loipen";

export const apps: App[] = [
  hiddenDesk,
  skationary,
  isymbols,
  notely,
  bodenseeTemperatur,
  lindenhofpark,
  itask,
  loipen,
];
