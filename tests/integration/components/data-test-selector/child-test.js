import { module, test } from "qunit";
import { setupRenderingTest } from "ember-qunit";
import { render } from "@ember/test-helpers";
import { hbs } from "ember-cli-htmlbars";

module("Integration | Component | data-test-selector/child", function(hooks) {
  setupRenderingTest(hooks);

  test("it renders", async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<DataTestSelector::Child data-test-simple="1"/>`);

    assert.equal(
      this.element.querySelector("[data-test-simple]"),
      null,
      "data-test-* is stripped correctly when passed as ...attribute"
    );

    await render(hbs`<DataTestSelector::Child data-test-simple/>`);

    assert.equal(
      this.element.querySelector("[data-test-simple]"),
      null,
      "data-test-* is stripped correctly when passed as ...attribute with no value"
    );
  });
});
