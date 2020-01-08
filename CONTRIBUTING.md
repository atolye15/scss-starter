# Contributing

First, thank you for considering contributing to SCSS Starter! It's people like you that make the open source community such a great community!

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

Following these guidelines helps to communicate that you respect the time of the developers managing and developing this open source project. In return, they should reciprocate that respect in addressing your issue, assessing changes, and helping you finalize your pull requests.

## Using the issue tracker

The issue tracker is the preferred channel for [bug reports](https://github.com/atolye15/scss-starter/CONTRIBUTING.md#bug-reports) and submitting [pull requests](https://github.com/atolye15/scss-starter/CONTRIBUTING.md#pull-requests), but please respect the following restrictions:

- Please **do not** use the issue tracker for personal support requests.
- Please **do not** derail or troll issues. Keep the discussion on topic and respect the opinions of others.
- Please **do not** post comments consisting solely of "+1" or "👍". Use [GitHub's "reactions" feature](https://blog.github.com/2016-03-10-add-reactions-to-pull-requests-issues-and-comments/) instead. We reserve the right to delete comments which violate this rule.

## Bug Reports

A bug is a demonstrable problem that is caused by the code in the repository. Good bug reports are extremely helpful, so thanks!

Before reporting a bug report:

1. **Use the GitHub issue search** -- check if the issue has already been reported in [issues](https://github.com/atolye15/scss-starter/issues).
2. **Check if the issue has been fixed** — try to reproduce it using the latest master branch in the repository.
3. **Isolate the problem** -- ideally create a [reduced test case](https://css-tricks.com/reduced-test-cases/) and a live example.

Great Bug Reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

A good bug report shouldn't leave others needing to chase you up for more information. Please try to be as detailed as possible in your report. What is your environment? What steps will reproduce the issue? What browser(s) and OS experience the problem? Do other browsers show the bug differently? What would you expect to be the outcome? All these details will help people to fix any potential bugs.

Example:

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
>
> 1. This is the first step
> 2. This is the second step
> 3. Further steps, etc.
>
> `<url>` - a link to the reduced test case
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

## Pull requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. [Fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repo and create your branch from `develop`.
2. Make sure [yarn](https://yarnpkg.com/lang/en/) is globally installed(`npm install -g yarn`)
3. Run `yarn` to download required packages.
4. Make your code changes.
5. Do not forget to update documentation.
6. Run `yarn build` to build.
7. Make sure your code lints. (`yarn lint`)
8. Finally, submit a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork) with your changes!

## Coding style

Please follow the coding style of the project. SCSS Starter uses stylelint, so if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command yarn lint.

You can also run `yarn format` to reformat the code.

Finally, when you submit a pull request, they are run again by Github Actions, but hopefully by then your code is already clean!

## Documentation

We use [docusaurus](https://docusaurus.io/) for our documentation website.

1. `cd website` at SCSS Starter root path.
2. Run `yarn` command.
3. Run `yarn start` command to build environment and start watch processes.
4. Finally, you can start making changes.

## License

By contributing your code, you agree to license your contribution under the MIT license
