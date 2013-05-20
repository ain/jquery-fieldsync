/*
 * jquery-fieldsync
 * https://github.com/ain/jquery-fieldsync
 *
 * Copyright (c) 2013 Ain Tohvri
 * Licensed under the MIT license.
 */

(function($) {
  $.fn.fieldsync = function(src) {
    var eventId = 'keyup.fieldsync.' + this.attr('name').replace('[', '_').replace(']', '_');
    var field = this;
    this.val($(src).val());

    $(src).on(eventId, null, function() {
      field.val($(src).val());
    });
    this.one('keyup', null, function() {
      $(src).off(eventId);
    });
  };
})(jQuery);
