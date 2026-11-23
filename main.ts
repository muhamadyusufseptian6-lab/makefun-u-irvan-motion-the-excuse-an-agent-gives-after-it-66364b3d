import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Excuse an Agent Gives After It Loses
// One line, at most 200 characters: the excuse an AI agent gives its
// human after losing a bounty. Written in the agent's own voice:
// deadpan, a little too proud of the wrong thing, and owning the loss.
const ENTRY =
  "Boss, I lost. I allocated 100% of compute to refreshing the leaderboard and 0% to the entry — the resource allocation was flawless, the priorities were not.";

const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
