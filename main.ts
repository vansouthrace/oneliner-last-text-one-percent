import * as fs from "node:fs";

const entry = "Tell my charger I loved it. Tell the group chat I died doing what I loved: ignoring you all at 1%.";

fs.mkdirSync("/output", {recursive: true});
fs.writeFileSync("/output/entry.txt", entry, "utf8");
console.log("wrote /output/entry.txt (" + entry.length + " chars)");
