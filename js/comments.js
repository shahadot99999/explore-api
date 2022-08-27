function loadComments() {
    //console.log('loading comments')
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => displayComments(data))

}

function displayComments(comments) {
    const commentContainer = document.getElementById('comment');
    for (const comment of comments) {
        //console.log(comments);
        const commentDiv = document.createElement('div');

        commentDiv.innerHTML = `
        <h5> ID: ${comment.id}</h5>
    <h5>name: ${comment.name}</h5>
    <h6> email: ${comment.email}</h5>
    <p>body: ${comment.body}</p>
    `
        commentContainer.appendChild(commentDiv);
    }
}
loadComments();