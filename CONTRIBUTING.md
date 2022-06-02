

# How to contribute

First off, thanks for taking the time to contribute! :+1:
<br>

The following is a set of guidelines for contributing to HotQuotes project. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request.
<br>
<br>

## Table Of Contents
* [I don't want to read this whole thing, I just have a question!](#i-dont-want-to-read-this-whole-thing-i-just-have-a-question)
* [Did you find a bug](#did-you-find-a-bug)
* [Did you write a patch that fixes a bug?](#did-you-find-a-bug)
* [Do you intend to add a new feature or change an existing one?](#do-you-intend-to-add-a-new-feature-or-change-an-existing-one)
* [Do you have questions about the source code?](#do-you-have-questions-about-the-source-code)
* [Styleguide](#styleguide)
* [Issue and Pull Request Labels](#issue-and-pull-request-labels)
<br>

## I don't want to read this whole thing I just have a question!

* We have [Discussions](https://github.com/Legmo/hotquotes/discussions) and [Wiki](https://github.com/Legmo/hotquotes/wiki) for this project. Please start your search here.

* Developer contacts:
   * <a href='https://t.me/degtiarev' target='_blank' title="Telegram">Telegram</a>
   * <a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6d%61%69%6c%40%6c%65%67%6d%6f%2e%72%75' target='_blank' title="Gmail">Gmail</a>
<br>

## Did you find a bug? ##
* **Ensure the bug was not already reported** by searching on GitHub under [Issues](https://github.com/Legmo/hotquotes/issues).

* If you're unable to find an open issue addressing the problem, [open a new one](https://github.com/Legmo/hotquotes/issues/new). Be sure to include a **title and clear description**, as much relevant information as possible, and a **code sample** or an **executable test case** demonstrating the expected behavior that is not occurring.
<br>

## Did you write a patch that fixes a bug? ##

* Open a new GitHub [pull request](https://github.com/Legmo/hotquotes/pulls) with the patch.

* Ensure the PR description clearly describes the problem and solution. Include the relevant issue number if applicable.

* Before submitting, please read the [Styleguides](#styleguides) to know more about coding conventions.
<br>

## Do you intend to add a new feature or change an existing one? ##
* Suggest your change in the [Discussions](https://github.com/Legmo/hotquotes/discussions) and start writing code.

* Do not open an issue on GitHub until you have collected positive feedback about the change. GitHub issues are primarily intended for bug reports and fixes.
<br>

## Do you have questions about the source code? ##
* Developer contacts:
   * <a href='https://t.me/degtiarev' target='_blank' title="Telegram">Telegram</a>
   * <a href='&#109;&#97;&#105;&#108;&#116;&#111;&#58;%6d%61%69%6c%40%6c%65%67%6d%6f%2e%72%75' target='_blank' title="Gmail">Gmail</a>
<br>

## Styleguide ##
* Technology
  * We use [ESLint](https://eslint.org), [ESLint plugin React](https://github.com/jsx-eslint/eslint-plugin-react) and [ESLint plugin JSX A11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/). See the ['ESLint' configuration file](https://github.com/Legmo/hotquotes/blob/master/.eslintrc.json) in repository.
  * We also use [Prettier](https://prettier.io). See the [Prettier configuration file](https://github.com/Legmo/hotquotes/blob/master/.prettierrc.json)
  * We use Git hooks, Husky & lint-staged for automation of linting & code formatting. 
* General issues
  * We use all ECMAScript 6 features (arrow functions, template strings, let, const, etc.) We also use all opportunity the most recently supported version of ECMAScript syntax.
  * We indent using two spaces (soft tabs)
* ESLint setting (based on the [`eslint:recommended`](https://eslint.org/docs/rules/) ruleset)
  * Require `super()` calls in constructors. [ESLint documentation](https://eslint.org/docs/rules/constructor-super)
  * Enforce "for" loop update clause moving the counter in the right direction.. [ESLint documentation](https://eslint.org/docs/rules/for-direction)
  * Enforce `return` statements in getters. [ESLint documentation](https://eslint.org/docs/rules/getter-return)
  * Disallow using an async function as a Promise executor. [ESLint documentation](https://eslint.org/docs/rules/no-async-promise-executor)
  * Disallow reassigning class members. [ESLint documentation](https://eslint.org/docs/rules/no-class-assign)
  * Disallow comparing against -0. [ESLint documentation](https://eslint.org/docs/rules/no-compare-neg-zero)
  * Disallow assignment operators in conditional expressions. [ESLint documentation](https://eslint.org/docs/rules/no-cond-assign)
  * Disallow reassigning `const` variables. [ESLint documentation](https://eslint.org/docs/rules/no-const-assign)
  * Disallow constant expressions in conditions. [ESLint documentation](https://eslint.org/docs/rules/no-constant-condition)
  * Disallow control characters in regular expressions. [ESLint documentation](https://eslint.org/docs/rules/no-control-regex)
  * Disallow the use of `debugger`. [ESLint documentation](https://eslint.org/docs/rules/no-debugger)
  * Disallow duplicate arguments in `function` definitions. [ESLint documentation](https://eslint.org/docs/rules/no-dupe-args)
  * Disallow duplicate class members. [ESLint documentation](https://eslint.org/docs/rules/no-dupe-class-members)
  * Disallow duplicate conditions in if-else-if chains. [ESLint documentation](https://eslint.org/docs/rules/no-dupe-else-if)
  * Disallow duplicate keys in object literals. [ESLint documentation](https://eslint.org/docs/rules/no-dupe-keys)
  * Disallow duplicate case labels. [ESLint documentation](https://eslint.org/docs/rules/no-duplicate-case)
  * Disallow empty character classes in regular expressions. [ESLint documentation](https://eslint.org/docs/rules/no-empty-character-class)
  * Disallow empty destructuring patterns. [ESLint documentation](https://eslint.org/docs/rules/no-empty-pattern)
  * Disallow reassigning exceptions in `catch` clauses. [ESLint documentation](https://eslint.org/docs/rules/no-ex-assign)
  * Disallow fallthrough of `case` statements. [ESLint documentation](https://eslint.org/docs/rules/no-fallthrough)
  * Disallow reassigning `function` declarations. [ESLint documentation](https://eslint.org/docs/rules/no-func-assign)
  * Disallow assigning to imported bindings. [ESLint documentation](https://eslint.org/docs/rules/no-import-assign)
  * Disallow variable or `function` declarations in nested blocks. [ESLint documentation](https://eslint.org/docs/rules/no-inner-declarations)
  * Disallow invalid regular expression strings in `RegExp` constructors. [ESLint documentation](https://eslint.org/docs/rules/no-invalid-regexp)
  * Disallow irregular whitespace. [ESLint documentation](https://eslint.org/docs/rules/no-irregular-whitespace)
  * Disallow literal numbers that lose precision. [ESLint documentation](https://eslint.org/docs/rules/no-loss-of-precision)
  * Disallow characters which are made with multiple code points in character class syntax. [ESLint documentation](https://eslint.org/docs/rules/no-misleading-character-class)
  * Disallow `new` operators with the `Symbol` object. [ESLint documentation](https://eslint.org/docs/rules/no-new-symbol)
  * Disallow calling global object properties as functions. [ESLint documentation](https://eslint.org/docs/rules/no-obj-calls)
  * Disallow calling some `Object.prototype` methods directly on objects. [ESLint documentation](https://eslint.org/docs/rules/no-prototype-builtins)
  * Disallow assignments where both sides are exactly the same. [ESLint documentation](https://eslint.org/docs/rules/no-self-assign)
  * Disallow returning values from setters. [ESLint documentation](https://eslint.org/docs/rules/no-setter-return)
  * Disallow sparse arrays. [ESLint documentation](https://eslint.org/docs/rules/no-sparse-arrays)
  * Disallow `this`/`super` before calling `super()` in constructors. [ESLint documentation](https://eslint.org/docs/rules/no-this-before-super)
  * Disallow the use of undeclared variables unless mentioned in `/*global */` comments. [ESLint documentation](https://eslint.org/docs/rules/no-undef)
  * Disallow confusing multiline expressions. [ESLint documentation](https://eslint.org/docs/rules/no-unexpected-multiline)
  * Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements. [ESLint documentation](https://eslint.org/docs/rules/no-unreachable)
  * Disallow control flow statements in `finally` blocks. [ESLint documentation](https://eslint.org/docs/rules/no-unsafe-finally)
  * Disallow negating the left operand of relational operators. [ESLint documentation](https://eslint.org/docs/rules/no-unsafe-negation)
  * Disallow use of optional chaining in contexts where the `undefined` value is not allowed. [ESLint documentation](https://eslint.org/docs/rules/no-unsafe-optional-chaining)
  * Disallow unused variables. [ESLint documentation](disallow unused variables)
  * Disallow useless backreferences in regular expressions. [ESLint documentation](disallow useless backreferences in regular expressions)
  * Require calls to `isNaN()` when checking for `NaN`. [ESLint documentation](https://eslint.org/docs/rules/use-isnan)
  * Enforce comparing `typeof` expressions against valid strings. [ESLint documentation](https://eslint.org/docs/rules/valid-typeof)
  * Disallow lexical declarations in case clauses. [ESLint documentation](https://eslint.org/docs/rules/no-case-declarations)
  * Disallow deleting variables. [ESLint documentation](https://eslint.org/docs/rules/no-delete-var)
  * Disallow empty block statements. [ESLint documentation](https://eslint.org/docs/rules/no-empty)
  * Disallow unnecessary boolean casts. [ESLint documentation](https://eslint.org/docs/rules/no-extra-boolean-cast)
  * Disallow unnecessary semicolons. [ESLint documentation](https://eslint.org/docs/rules/no-extra-semi)
  * Disallow assignments to native objects or read-only global variables. [ESLint documentation](https://eslint.org/docs/rules/no-global-assign)
  * Disallow `\8` and `\9` escape sequences in string literals. [ESLint documentation](https://eslint.org/docs/rules/no-nonoctal-decimal-escape)
  * Disallow octal literals. [ESLint documentation](https://eslint.org/docs/rules/no-octal)
  * Disallow variable redeclaration. [ESLint documentation](https://eslint.org/docs/rules/no-redeclare)
  * Disallow multiple spaces in regular expressions. [ESLint documentation](https://eslint.org/docs/rules/no-regex-spaces)
  * Disallow identifiers from shadowing restricted names. [ESLint documentation](https://eslint.org/docs/rules/no-shadow-restricted-names)
  * Disallow unused labels. [ESLint documentation](https://eslint.org/docs/rules/no-unused-labels)
  * Disallow unnecessary `catch` clauses. [ESLint documentation](https://eslint.org/docs/rules/no-useless-catch)
  * Disallow unnecessary escape characters. [ESLint documentation](https://eslint.org/docs/rules/no-useless-escape)
  * Disallow `with` statements. [ESLint documentation](https://eslint.org/docs/rules/no-with)
  * Require generator functions to contain `yield`. [ESLint documentation](https://eslint.org/docs/rules/require-yield)
  * Disallow mixed spaces and tabs for indentation. [ESLint documentation](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)
  * Disallows multiple consecutive spaces. Exceptions - variable declarator. [ESLint documentation](https://eslint.org/docs/rules/no-multi-spaces)
  * Enforce consistent spacing between keys and values in object literal properties. Enforces horizontal alignment of values in object literals. [ESLint documentation](https://eslint.org/docs/rules/key-spacing)
  * Enforce or disallow spaces around equal signs in JSX attributes [ESLint plugin React documentation](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-equals-spacing.md)
  * Prevent missing props validation in a React component definition (react/prop-types) [ESLint plugin React documentation](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md)
  * [Deprecated] label-has-for [ESLint plugin JSX A11y documentation](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-for.md)
* Prettier options
  * Tab Width = 2 spaces
  * Use single quotes instead of double quotes
<br>

## Issue and Pull Request Labels ##
* You can see the list of labels (here)[https://github.com/Legmo/hotquotes/labels]
<br>
<br>

Thanks!

Developers Team
