$( document ).ready(function() {
  var charRemainder = 140;

  //text area click
  $( '#new-tweet-textarea' ).click(function() {
  $(this).animate({height:'5em'}, 200);
  $('#tweet-controls').css("display", "block");

  });


  //text-area typing
  $( "#new-tweet-textarea" ).keyup(function() {
    var charRemainder = $(this).val().length;

    $('#char-count').text(140 - charRemainder);

      if(charRemainder >= 130) {
        $("#char-count").css('color', 'red');
      } else {
        $("#char-count").css('color', '#999');
      }

      if(charRemainder > 140) {
        $('#tweet-submit').prop('disabled', true);
      } else {
        $('#tweet-submit').prop('disabled', false);
      }
  });


  //tweet event
  $('#tweet-submit').click(function(event) {
      var tweet = $('#new-tweet-textarea').val();
      if (!tweet.length) return;

      var userName = 'JT Parker';

      var tweetHtml = '<div class="tweet">'
                    + '<div class="content">'
                    + '<img class="avatar" src="img/damenleeturks.jpg" />'
                    + '<strong class="fullname">' + userName + '</strong>'
                    + '<span class="username"> @jtp311</span>'
                    + '<p class="tweet-text">' + tweet + '</p>'
                    + '<div class="tweet-actions">'
                    + '<ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul>'
                    + '</div></div>';

      $('#stream').prepend(tweetHtml);
  });




});
