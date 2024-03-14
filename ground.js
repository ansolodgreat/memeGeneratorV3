document.addEventListener("DOMContentLoaded", function() {
    const memeForm = document.getElementById("memeForm");
    const memeContainer = document.getElementById("memeContainer");

    memeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // form inputs
        const topText = document.getElementById("topText").value;
        const bottomText = document.getElementById("bottomText").value;
        const image = document.getElementById("image").files[0];

        // Validate form inputs
        if (!topText || !bottomText || !image) {
            alert("Please fill out all fields.");
            return;
        }

        // Create meme container
        const memeDiv = document.createElement("div");
        memeDiv.classList.add("meme");

        // Create top text element
        const topTextDiv = document.createElement("div");
        topTextDiv.classList.add("text-container", "top-text");
        topTextDiv.innerText = topText;

        // Create bottom text element
        const bottomTextDiv = document.createElement("div");
        bottomTextDiv.classList.add("text-container", "bottom-text");
        bottomTextDiv.innerText = bottomText;

        // Create image element
        const imageElement = document.createElement("img");
        const reader = new FileReader();
        reader.onload = function(e) {
            imageElement.src = e.target.result;
        }
        reader.readAsDataURL(image);

        // Create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Delete";
        deleteBtn.addEventListener("click", function() {
            memeContainer.removeChild(memeDiv);
        });

        // Append elements to meme container
        memeDiv.appendChild(topTextDiv);
        memeDiv.appendChild(bottomTextDiv);
        memeDiv.appendChild(imageElement);
        memeDiv.appendChild(deleteBtn);

        // Append meme container to meme container div
        memeContainer.appendChild(memeDiv);

        // Clear form inputs
        memeForm.reset();
    });
});