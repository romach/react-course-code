# React course: the code

The finished code for every lesson of
[Build the Library Frontend with React](https://react.courses.romach007.com), a hands-on course
in which you build a React frontend for the Library API, one lesson at a time.

The project is in [`library-web/`](library-web). Write it yourself while you follow the
lessons, and use this repo to compare when you get stuck. Each lesson page links its snapshot
and the changes it made. The code here is exactly the code the lessons show, nothing more.

## One tag per lesson

There is one commit per lesson, and the tag `lesson-NN` marks the project at the end of lesson
NN.

- Browse a lesson: pick the tag in GitHub's branch/tag menu, or open
  `https://github.com/romach/react-course-code/tree/lesson-01`.
- See what a lesson changed:
  `https://github.com/romach/react-course-code/compare/lesson-01...lesson-02`.
- Check one out locally:

  ```bash
  git clone https://github.com/romach/react-course-code.git
  cd react-course-code
  git switch --detach lesson-01
  ```

## Running it

Node 24 (the version is in `library-web/.nvmrc`) and Bun 1.4 or newer. The app talks to the
Library API from the [Spring Boot course's code](https://github.com/romach/spring-boot-course-code)
(tag `lesson-14` or later), which must be running on `localhost:8080`.

```bash
cd library-web
bun install
bun run dev
```

Then open http://localhost:5173.

## This history gets rewritten

The lessons are kept up to date, for example when the course moves to a new React or Vite
version. When an early lesson changes, every later commit changes with it, so the history of
`master` is rewritten and the `lesson-NN` tags move. The previous history stays available in
an `archive/<date>` branch.

Treat the repo as read-only. If you cloned it before a rewrite, `git pull` stops with
"divergent branches". To catch up, run:

```bash
git fetch --force --tags
git reset --hard origin/master
```

This discards any local commits on `master`, so do your own work in your own project, not in
this clone.

## Questions

Questions and mistake reports go in the course's
[discussions](https://github.com/romach/courses-discussions/discussions/categories/react).

## License

[MIT](LICENSE)
