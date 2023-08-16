# Contribution Guide
## To Publish an issue
Thanks for your interset. Before publishing an issue, please check our guideline.

### 1. Search for duplicates
Before publishing an issue, please check whether the duplicated issue exists or not.

  - [Search Issues](https://github.com/gitovep/gitove/issues?q=)

### 2. Did you find a bug?
When you reporting a bug, then please write about those items:

  - What version you're using
  - If possible, give me an isolated way to reproduce the behavior.
  - The behavior your expect to see, and the actual behavior.

### 3. Do you have a suggestion?
I always welcome your suggestion. When you publishing a suggestion, then please write such items: 

  - A description of the problem you're trying to solve.
  - An overview of the suggested solution.
  - Examples of how the suggestion would work in various places.
    - CLI or code examples showing the expected behavior.




## Contributing Code
### Adding a Test
Add test codes should be in the `test` directory under the same path as the testing file. For example, if you are testing `src/commands/commit/action.ts`, then your test code should be located in `test/commands/commit/action.spec.ts`.

### Test your code
Before sending a pull request, please test your new code. Please run the following commands:

```bash
# COMPILE
pnpm build

# RUN TEST
pnpm test
```

### Lint your code
`lint-staged` will run automatically when you try commit.

If you get lint error, please fix it before you make a commit. However, if you feel lint rule is inefficient or might cause a potential problem, you may fix it and make a pull request.




## Sending a Pull Request
Thanks for your contribution. Before sending a pull request to `main` branch, please check below.

### 1. Fork repo or make a branch from issues
It is highly recommended to fork the repo before you make your own changes in order to keep repo clean and ordered.

However, if you are already have permissions, you may create your own branches. There is no clear branch naming convention, but be concise and clear.

### 2. Include enough descriptions
When you send a pull request, please do follow PR convention provided in the template. Because PRs will be squashed merge, having clear and informative title is important.

Also, please include a description of what your change intends to do. You are encouraged to refer relevant issues, if possible:

  - Refactor features
  - Fix #17
  - Add tests for #28

### 3. Include adequate tests
As I've mentioned in the `Contributing Code` section, your PR should pass the test.

A PR with *not passing tests* is hardly going to be accepted unless you have appropriate reasons for it. If there are some specific reasons for it, please provide relavent details in both code and PR description.


