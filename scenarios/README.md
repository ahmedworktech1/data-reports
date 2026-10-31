# Scenarios

Put one file per recorded scenario here: `<scenario-name>.md`.

Each file must describe:
- Purpose
- Steps (with exact Arabic labels used in selectors)
- Which tables are affected
- What DB changes are expected

Template:

```md
# <scenario-name>

## Purpose
TODO

## Steps
1. TODO (e.g. open `/TODO_path`, fill `TODO` label with `c.someField`)
2. TODO + screenshot after each step

## Tables affected
- TODO_Table1
- TODO_Table2

## Expected DB changes
- TODO_Table1: +1 row where ...
```
