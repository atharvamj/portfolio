$(function() {
  /* NOTE: hard-refresh the browser once you've updated this */
  $(".typed").typed({
    strings: [
      "stat AtharvaJoshi<br/>" +
      "><span class='caret'>$</span> job: Friendly Neighborhood Data Scientist<br/> ^100" +
      "><span class='caret'>$</span> skills: Data Analysis, Machine Learning and Beyond<br/> ^100" +
      "><span class='caret'>$</span> hobbies: Gaming, Movies and Tech <br/> ^300" +
      "><span class='caret'>$</span> universe: Earth 616<br/> ^300"
    ],
    showCursor: true,
    cursorChar: '_',
    autoInsertCss: true,
    typeSpeed: 0.001,
    startDelay: 50,
    loop: false,
    showCursor: false,
    onStart: $('.message form').hide(),
    onStop: $('.message form').show(),
    onTypingResumed: $('.message form').hide(),
    onTypingPaused: $('.message form').show(),
    onComplete: $('.message form').show(),
    onStringTyped: function(pos, self) {$('.message form').show();},
  });
  $('.message form').hide()
});
