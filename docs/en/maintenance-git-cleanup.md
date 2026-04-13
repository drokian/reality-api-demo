# Maintenance - Git Cleanup

This guide is for routine repository hygiene in the demo project.

## Goals

- Keep history understandable
- Keep pull requests focused
- Avoid accidental inclusion of generated or unrelated files

## Recommended Routine

1. Check working tree before edits.
2. Group related changes in single-purpose commits.
3. Avoid mixing content updates with refactors.
4. Run `npm run build` before creating PR.

## Snapshot Update Hygiene

When updating `src/data/snapshot.json`:

- Verify JSON validity
- Confirm counts match content intent
- Ensure no sensitive/private data is introduced

## Branching Reminder

Use branch naming and PR target rules defined in the workspace documentation.
For feature/docs changes, base branch is typically `develop` in workspace workflow.
