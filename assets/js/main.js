
var Main = (function ($) {
	return {
		characterCount: function () {
      $('textarea.has-char-limit').keyup(function () {
        var max = $(this).attr('maxlength');
        var len = $(this).val().length;
        $(this).next('.character-count').text(len + '/' + max + ' characters');
        if (len >= (max - 10)) {
          $(this).next('.character-count').addClass('limit');
        } else {
          $(this).next('.limit').removeClass('limit');
        }
      });
		},
		initMain: function () {
			$(document).ready(function () {
				Main.characterCount();
			})
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();