let sNumber = document.getElementById("char-counter");
let Container = document.getElementById("comments-container");
let newInputValue = document.getElementById("new-comment");
let addBtn = document.getElementById("add-comment-btn");

const maxChar = 250;

newInputValue.addEventListener("input", () => {
    const remaining = maxChar - newInputValue.value.length;
    sNumber.textContent = `${remaining} characters remaining`;
});

addBtn.addEventListener("click", () => {
    if (newInputValue.value.trim() === "") return;

    createComment(newInputValue.value.trim());
    newInputValue.value = "";
    sNumber.textContent = `${maxChar} characters remaining`;
});

function createComment(text, parent = Container) {
    const commentDiv = document.createElement("div");
    commentDiv.className = "comment-box";

    const commentText = document.createElement("p");
    commentText.className = "comment-text";
    commentText.textContent = text;
    commentDiv.appendChild(commentText);

    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    const replyButton = document.createElement("button");
    replyButton.className = "btn reply";
    replyButton.textContent = "Reply";
    replyButton.addEventListener("click", () => toggleReplyInput(commentDiv));
    buttonContainer.appendChild(replyButton);

    const editButton = document.createElement("button");
    editButton.className = "btn edit";
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => editComment(commentDiv, commentText));
    buttonContainer.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.className = "btn delete";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => deleteComment(commentDiv));
    buttonContainer.appendChild(deleteButton);

    commentDiv.appendChild(buttonContainer);
    parent.appendChild(commentDiv);
}

function toggleReplyInput(commentDiv) {
    let replyInput = commentDiv.querySelector(".reply-input");

    if (replyInput) {
        commentDiv.removeChild(replyInput);
    } else {
        replyInput = document.createElement("div");
        replyInput.className = "reply-input";

        const textarea = document.createElement("textarea");
        textarea.className = "reply-textarea";
        textarea.maxLength = maxChar;
        textarea.placeholder = "Write a reply...";

        const sNumber = document.createElement("p");
        sNumber.className = "char-counter";
        sNumber.textContent = `${maxChar} characters remaining`;

        textarea.addEventListener("input", () => {
            sNumber.textContent = `${maxChar - textarea.value.length} characters remaining`;
        });

        const replyBtn = document.createElement("button");
        replyBtn.className = "reply-btn";
        replyBtn.textContent = "Reply";
        replyBtn.addEventListener("click", () => {
            if (textarea.value.trim() !== "") {
                createComment(textarea.value.trim(), commentDiv);
                commentDiv.removeChild(replyInput);
            }
        });

        replyInput.appendChild(textarea);
        replyInput.appendChild(sNumber);
        replyInput.appendChild(replyBtn);
        commentDiv.appendChild(replyInput);
    }
}

function editComment(commentDiv, commentText) {
    const editInput = document.createElement("textarea");
    editInput.className = "edit-textarea";
    editInput.value = commentText.textContent;

    const saveButton = document.createElement("button");
    saveButton.className = "save-btn";
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        if (editInput.value.trim() !== "") {
            commentText.textContent = editInput.value;
            commentDiv.replaceChild(commentText, editInput);
            saveButton.remove();
        }
    });

    commentDiv.replaceChild(editInput, commentText);
    commentDiv.appendChild(saveButton);
}

function deleteComment(commentDiv) {
    commentDiv.remove();
}
