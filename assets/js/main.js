
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
    editPost: function () {
      // for the sake of testing - this will probably be angularified
      $('.post-toggle').on('click', function() {
        var $thisPost = $(this).closest('.post');
        $('.post.active').not($thisPost).removeClass('active');
        $thisPost.toggleClass('active');
      });
    },
    likeIdea: function () {
      $('.like-this').on('click', function(){
        $('.post-content').addClass('has-been-liked');
        $('.liked-view').addClass('active');
      });

      $('.close-like').on('click', function(){
        $('.post-content.has-been-liked').removeClass('has-been-liked');
        $('.liked-view.active').removeClass('active');
      });
    },
		initMain: function () {
			$(document).ready(function () {
        Main.characterCount();
        Main.editPost();
        Main.likeIdea();
			})
		}
	};
// Pass in jQuery.
})(jQuery);

Main.initMain();