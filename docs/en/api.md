# API

## Overview

The demo repository does not expose runtime API routes.
All pages are statically generated from a local snapshot file.

## Data Access Model

- Source file: `src/data/snapshot.json`
- Access layer: `src/lib/data.ts`
- Runtime behavior: build-time/static read only

## Why No Public API Here

- Keep hosting simple and low-risk (GitHub Pages)
- Ensure deterministic public output
- Avoid operational complexity in the demo repository

## Data Contract (High Level)

`snapshot.json` includes these top-level collections:

- `observations`
- `hypotheses`
- `experiments`
- `analyses`
- `references`
- `connections`
- `tags`

It also includes metadata such as `exportedAt`, `version`, and `counts`.

## If You Need Programmatic Access

Use the full platform repository and internal services where applicable.
This demo intentionally keeps a static distribution model.
