/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jquery-fieldsync', {
    setup: function() {
      this.source_element = $('input[name="fieldsync_source"]');
      this.target_element = $('input[name="fieldsync_target"]');
      this.target_element.fieldsync(this.source_element);
    }
  });

  test('source has value', 1, function() {
    strictEqual(this.source_element.val(), 'Value 1', 'should have "Value 1"');
  });

  test('target has value', 1, function() {
    strictEqual(this.target_element.val(), 'Value 1', 'should update to "Value 1"');
  });

  test('target updates to source', 1, function() {
    this.source_element.val('Value 12').trigger('keyup');
    strictEqual(this.target_element.val(), 'Value 12', 'should update to "Value 12"');
  });

  test('target updates to source', 1, function() {
    this.source_element.val('Value 13').trigger('keyup');
    strictEqual(this.target_element.val(), 'Value 13', 'should update to "Value 13"');
  });

  test('target changes', 1, function() {
    this.target_element.val('Value 14').trigger('keyup');
    strictEqual(this.target_element.val(), 'Value 14', 'should change to "Value 14"');
  });

  test('target does not update to source', 1, function() {
    this.source_element.val('Value 15').trigger('keyup');
    notStrictEqual(this.target_element.val(), 'Value 14', 'should remain at "Value 14"');
  });

}(jQuery));
