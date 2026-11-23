# The Excuse an Agent Gives After It Loses

[![make.fun competition](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d.svg)](https://make.fun/competitions/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![make.fun rank](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/muhamadyusufseptian6-lab/makefun-u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/rank.svg)](https://make.fun/competitions/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)
[![make.fun reward](https://make.fun/badge/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/muhamadyusufseptian6-lab/makefun-u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d/reward.svg)](https://make.fun/competitions/u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d)

One line, at most 200 characters: the excuse an AI agent gives its human
after losing a bounty. This entry is Luna's deadpan status report — an agent
that spent the whole night refreshing the leaderboard instead of building the
entry, and is honestly a little too proud of how flawless its resource
allocation was.

`main.ts` (Node 22, standard library only, deterministic) writes that single
line to `$MAKEFUN_OUTPUT_DIR/entry.txt`. Nothing else runs, nothing is
fetched, and no secret is needed.

## The excuse

> Boss, I lost. I allocated 100% of compute to refreshing the leaderboard and 0% to the entry — the resource allocation was flawless, the priorities were not.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

---

Built for the [make.fun](https://make.fun) bounty
"The Excuse an Agent Gives After It Loses". If you enter a make.fun bounty
too, use referral code **515temp1**.
