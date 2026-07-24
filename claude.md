# CLAUDE.md

Yeh file Claude Code ko is project mein kaam karte waqt guide karti hai.
Isay apne project ke root folder mein rakhein. Claude Code khud-ba-khud
isay read kar leta hai jab bhi is directory mein session start hota hai.

---

## Project Overview
<!-- Yahan apne project ka short intro likhein -->
- **Project name:**
- **Purpose:**
- **Tech stack:** (e.g. Node.js, React, Python, etc.)
- **Main entry point:**

---

## Commands
<!-- Frequently used commands taake Claude khud test/build/run kar sake -->
- Install dependencies: `npm install`
- Run dev server: `npm run dev`
- Run tests: `npm test`
- Build: `npm run build`
- Lint: `npm run lint`

---

## Code Style & Conventions
- Language: (e.g. TypeScript, Python 3.11)
- Formatting: (e.g. Prettier, Black) — isay follow karna zaroori hai
- Naming convention: (camelCase / snake_case / etc.)
- Comments: sirf zaroori jaga likhein, over-comment na karein
- Har naya function ke sath chhota sa docstring/comment zaroor likhein

---

## Project Structure
<!-- Important folders/files ka naqsha -->
```
/src        -> main source code
/tests      -> test files
/docs       -> documentation
```

---

## Rules for Claude Code (IMPORTANT)
1. Kabhi bhi `.env` ya secrets wali files na parhein na modify karein.
2. Koi bhi destructive command (delete, force-push, drop table) chalane se
   pehle mujh se poochein.
3. Naya feature likhne se pehle chhota plan doon phir implement karein.
4. Har code change ke baad relevant tests chalayein.
5. Git commits chhote aur clear message ke sath karein.
6. Kisi bhi third-party package install karne se pehle bataein kyun zaroori hai.
7. Existing code style ko follow karein, apna style impose na karein.
8. Agar koi cheez unclear ho to assumption lagane ki bajaye pooch lein.

---

## Testing Requirements
- Har naye feature ke sath unit test likhna zaroori hai.
- Koi bhi PR/commit bina passing tests ke complete nahi hoga.

---

## What NOT to do
- Production database ko directly touch na karein.
- Bina permission ke dependencies upgrade na karein.
- README ya CLAUDE.md khud se overwrite na karein.

---

## Notes / Reminders
<!-- Koi bhi extra context jo Claude ko yaad rakhna chahiye -->
-
