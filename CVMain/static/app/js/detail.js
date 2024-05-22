document.getElementById('commentForm').addEventListener('submit', function(event) {
    var commentName = document.getElementById('comment_name').value;
    var comment = document.getElementById('comment').value;
    var formMessage = document.getElementById('formMessage');

    if (!commentName.trim() || !comment.trim()) {
        formMessage.textContent = 'Please input Name and Comment before submitting.';
        formMessage.style.display = 'block';
        event.preventDefault();
    } else {
        formMessage.style.display = 'none';
    }
});