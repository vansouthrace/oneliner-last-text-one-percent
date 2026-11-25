// Last text at 1%: the dying phone says goodbye to the group chat and its charger.
import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "1% left. Tell the group chat I loved them. Tell my charger I never blamed it. Goodbye, and please stop shaking me.");
