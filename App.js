class Comment {
    constructor(username, date, textComment) {
        this.username = username;
        this.date = date;
        this.textComment = textComment;
    }
}

class UI {
    addComment(comment) {
        const commentList = document.getElementById("comment-list");
        const element = document.createElement("div");
        element.innerHTML = `
            <div class="col-md-12">
                <div class="card text-center border-primary mb-4" style="color:black">
                    <div class="card-body">
                        <strong>Usuario</strong>: ${comment.username}
                        <br>
                        <strong>Fecha</strong>: ${comment.date}
                        <br>
                        <br>
                        ${comment.textComment}
                        <br>
                        <br>
                        <a href="#" class="btn btn-danger" name="delete">Eliminar</a>
                    </div>
                 </div>
            </div>
        `;
        commentList.appendChild(element);
    }

    resetForm() {
        document.getElementById('comment-form').reset();
    }

    deleteComment(element) {
        if(element.name === 'delete') {
            element.parentElement.parentElement.parentElement.parentElement.remove();
        }
    }
}

// DOM Events
document.getElementById('comment-form')
    .addEventListener("submit", function(e) {
        const username = document.getElementById("username").value;
        const date = document.getElementById("date").value;
        const textComment = document.getElementById("textComment").value;
        
        console.log(username, date, textComment);

        const comment = new Comment(username, date, textComment);

        const ui = new UI();

        ui.addComment(comment);

        ui.resetForm();

        e.preventDefault();
})


document.getElementById('comment-list').addEventListener('click', function(e) {
    const ui = new UI();
    ui.deleteComment(e.target);
    e.preventDefault();
});
