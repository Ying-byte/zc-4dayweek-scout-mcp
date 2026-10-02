#!/usr/bin/env node
import { createChannelMcp } from './_shared/create-channel-mcp.mjs';

const mcp = createChannelMcp({
  slug: "4dayweek",
  boardId: "4dayweek-official",
  domain: "4dayweek.io",
  npmName: "zc-4dayweek-scout-mcp",
});

mcp.start().catch((e) => {
  console.error(e);
  process.exit(1);
});
