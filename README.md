# JavaScript Unit Testing

## Setting up Testing Environment

- Node Js (latest)
- Code Editor of your choice (VS code)

## Introduction to Unit Testing

### What is Unit Testing?

A form of automated testing where we write code to check our code works as excepted.

> Automated testing is way faster than manual testing.

**How much is Unit Testing needed?**

- Having no unit tests at all and relying on manual testing ❌
- Covering every line of code with tests ❌
- Be pragmatic ✅

| New Projects                                                                                                                     | Stable Projcts                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| - Not the best candidates for unit testing. </br> - Requirements change, tests break. </br> Spend more time fixing broken tests. | - Cover critical modules with tests. </br> - Change and refactor with confidance. </br> |

> Unit Testing is an **Investment** in Quality.

> [!IMPORTANT]
>
> Write tests that are **maintainable**, **robust** and **trustworthy**.

**Benifits**

- **Detectus bug early:** The later we fix a bug, the more costly it is for a buisness.
- **Facilitate refactoring:** Changin the structure of the code without changing its behavior or functionality.
- **Improve code quality**
- **Documentation**

### Types of Tests

1️⃣ **Unit Tests:** It verifies that <ins>correctenss of individual units or components</ins> of application in isolation. These units could be _functions_, _classes_, or evern _small modules_.

> [!NOTE]
>
> **Unit tests** help catch bugs early in the deveopment process.

2️⃣ **Integration Tests:** The integration tests are <ins>focuses on how different units or components are work together as a whole.</ins>

> [!NOTE]
>
> It helps to identify issues that may arise when combining different units such as data flow problems, communication between different modules, or compatibility issues between components.

3️⃣ **End to End Tests:** The E2E tests are <ins>focuses on entire application as a whole</ins>.

> [!NOTE]
>
> E2E tests simulate user interactions with the entire system.

### Test Driven Development (TDD)

TDD is a way of building software, it follows a simple, effective 3 step cycle.

- Start by writing a failing test.
- Write just enought code to make the test pass.
- Refactor if necessary.

## Core Unit Testing Techniques

## Breaking Dependencies with Mocks

## Improving Code Quality with Static Analysis Tools
