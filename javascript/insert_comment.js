function addComment() {

	var commentTextArea = document.getElementById('comment');

	//check if the user wrote something
	if(commentTextArea.value != '') {

		var ni = document.getElementById('comment-container-list');
		var num = document.getElementById('comment-container-list').value;
		if(null == num) {
			ni.value = 0;
		}
		else {
			ni.value = num + 1;
		}

		var newComment = document.createElement('div');
		var commentId = 'comment-message' + ni.value;
		newComment.setAttribute('id', commentId);
		ni.appendChild(newComment);

		createComment(commentId, ni.value);}
	else {
		alert('The comment cannot be empty!');
	}
}

function createComment(commentId, currentIndex) {
	$( '#' + commentId ).load( "../html/comment.html", function (responseText, textStatus, XMLHttpRequest) {
    if (textStatus == "success") {
         // all good!
         populateComment(currentIndex);
    }
    if (textStatus == "error") {
         // oh noes!
    }
  });
}

function populateComment(currentIndex)
{
	var message = document.getElementById('comment-text');
	setMessageText(message, currentIndex);

	var date = document.getElementById('comment-date');
	setMessageDate(date, currentIndex);
}

function setMessageText(commentText, currentIndex) {
	// var commentText = document.getElementById('comment-text');
	var commentTextArea = document.getElementById('comment');

	commentText.setAttribute('id', 'comment-text' + currentIndex);
	commentText.innerHTML = commentTextArea.value;
	commentTextArea.value = '';
}

function setMessageDate(commentDate, currentIndex) {
	var d = new Date(); // for now
	d.getHours();
	d.getMinutes();
	d.getSeconds();

	commentDate.innerHTML = d.getHours() + ':' + d.getMinutes();
	commentDate.setAttribute('id', 'comment-date' + currentIndex);
}