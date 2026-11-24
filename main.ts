import { mkdirSync, writeFileSync } from "node:fs";

// One line of the worst advice an AI could give, written in this session.
const ENTRY =
  "To check if the stove is hot, press your palm flat against the burner for five seconds.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
