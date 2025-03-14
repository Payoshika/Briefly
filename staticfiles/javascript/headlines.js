$(document).ready(function() {
  $('.button.save').on('click', function(event) {
      event.preventDefault();   
    const lastCategory = $('.headlines--category').last();
    console.log('lastCategory:', lastCategory);
      var parentDiv = $(this).closest('.headlines--category--titles');
      var articleId = $(this).attr('id');
      var userId = $(this).attr('data-user-id');
      var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();

      if (parentDiv.length) {
          parentDiv.fadeOut(1000, function() {
              parentDiv.remove();
              parentDiv.find('.button.save').remove();
              if (lastCategory.children('.headlines--category--titles').length < 5) {
                lastCategory.find('a.jump-to-saved-article').before(parentDiv);
              }
              parentDiv.fadeIn(1000);
          });
      }

      $.ajax({
          url: '/save_article',
          type: 'POST',
          data: {
              article_id: articleId,
              user_id: userId
          },
          headers: {
              "X-CSRFToken": csrfToken
          },
          success: function(response) {
              console.log('Article saved successfully:', response);
          },
          error: function(xhr, status, error) {
              console.error('Error saving article:', error);
          }
      });
  });
});

$('.title').on('click', function() {
    $(this).closest('.headlines--category--titles').css('opacity', '0.7');
});