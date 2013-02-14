/*! jQuery Fieldsync - v0.1.0 - 2013-02-13
* https://github.com/ain/jquery-fieldsync
* Copyright (c) 2013 Ain Tohvri; Licensed MIT */

(function($) {
  $.fn.fieldsync = function(src) {
    if (this.val().length > 0) {
      return;
    }
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