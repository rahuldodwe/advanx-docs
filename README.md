# advanx-docs

An AdvanxJS project — built on the Agent-Native (AX) framework.

## Quick Start

```bash
bun install
advanx build tests/counter
open tests/counter/dist/index.html
```

## Add a component

1. Create `tests/<name>/{logic.ts,view.html,style.css}`.
2. Run `advanx build tests/<name>`.
3. Inspect the contract: `advanx explain tests/<name>`.

See `CONSTITUTION.md` for the eight laws every component must follow.
