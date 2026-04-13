# Database

## Demo Repository Policy

This repository has no runtime database connection.

## Why

- Public deployment target is GitHub Pages (static hosting)
- Demo must remain read-only and easy to verify
- Operational concerns are delegated to the full private platform

## Data Source

- Snapshot file: `src/data/snapshot.json`
- Snapshot origin: exports generated from the full platform database workflow

## Implications

- No migrations
- No Prisma client
- No write operations
- No runtime secrets needed for demo pages

## Full Platform Note

Database schema, migrations, and CRUD workflows live in the private `commercial` repository.
