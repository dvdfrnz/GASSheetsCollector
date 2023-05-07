import { main } from "./App";
import { looker } from "./Looker";
import { pencil } from "./Pencil";
import { collector } from "./Collector";

(global as any).main = main;
(global as any).looker = looker;
(global as any).pencil = pencil;
(global as any).collector = collector;
