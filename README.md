# test-selector-repro

Reproduction repository for `ember-test-selectors` repo issue #427

[data-test selectors are not stripped from colocated component templates](https://github.com/simplabs/ember-test-selectors/issues/427)

Element stripping added under every environment to make running example easy

## Steps

* `git clone <repository-url>` this repository
* `cd test-selector-repro`
* `yarn install`
* `ember serve`
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

Visiting the application [http://localhost:4200/](http://localhost:4200/) will show numbers next to text when test selectors are not being stripped.
