$(document).ready(function() {
    $('.remove-saved-article').on('click', function(event) {
        event.preventDefault();
        var parentDiv = $(this).closest('.headlines--category--titles');
        var articleId = $(this).attr('id');
        var userId = $(this).attr('data-user-id');
        var csrfToken = $('input[name="csrfmiddlewaretoken"]').val();

        if (parentDiv.length) {
            parentDiv.css({
                'opacity': '0',
                'transition': 'opacity 0.5s, transform 0.5s',
                'transform': 'translateX(-100%)'
            });
            setTimeout(function() {
                parentDiv.remove();
            }, 500);
        }

        $.ajax({
            url: '/remove_saved_article',
            type: 'POST',
            data: {
            article_id: articleId,
            user_id: userId
            },
            headers: {
                "X-CSRFToken": csrfToken
            },
            success: function(response) {
            console.log('Article removed successfully:', response);
            },
            error: function(xhr, status, error) {
            console.error('Error removing article:', error);
            }
        });
    });
});