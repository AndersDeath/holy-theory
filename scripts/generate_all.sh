#!/bin/bash

bun run build:all && bun generate:pdf:from:md && bun generate:pdf:from:md:algorithms && bun run generate:pdf:from:html && bun run generate:pdf:from:html:algorithms