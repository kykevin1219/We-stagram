let addReplyButton = document.getElementsByClassName('uploadComment')[0];
let replyContent = document.getElementsByClassName('addComment')[0];
let replyList = document.getElementsByClassName('replyArea')[0];
addReplyButton.addEventListener('click' , function() {
    if (Boolean(replyContent.value) === true) {
        let newComment = document.createElement('div');
        newComment.className = "reply";
        let newCommentId = document.createElement('strong');
        newCommentId.className = "userId";
        newCommentId.innerHTML = "wecode_bootcamp";
        let newCommentContent = document.createElement('span')
        newCommentContent.className = "commentText";
        newCommentContent.innerHTML = replyContent.value;
        replyList.appendChild(newComment);
        newComment.appendChild(newCommentId);
        newComment.appendChild(newCommentContent);
    }
    
});