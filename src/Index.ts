import { main } from "./App";
import { looker } from "./Looker";
import { pencil } from "./Pencil";
import { collector } from "./Collector";
import { onOpen } from "./Menu";
import { createTimeTriggerSpecifcDate } from "./Trigger";
import { eraser } from "./Eraser";

(global as any).main = main;
(global as any).looker = looker;
(global as any).pencil = pencil;
(global as any).collector = collector;
(global as any).onOpen = onOpen;
(global as any).createTimeTriggerSpecifcDate = createTimeTriggerSpecifcDate;
(global as any).eraser = eraser;
