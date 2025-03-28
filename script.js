document.addEventListener("DOMContentLoaded", function () {
    const uploadForm = document.getElementById("uploadForm");
    const photoInput = document.getElementById("photoInput");

    if (uploadForm) {
        uploadForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const file = photoInput.files[0];

            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    localStorage.setItem("uploadedPhoto", e.target.result);
                    window.location.href = "result.html";
                };
                reader.readAsDataURL(file);
            }
        });
    }

    const displayPhoto = document.getElementById("displayPhoto");
    if (displayPhoto) {
        const savedPhoto = localStorage.getItem("uploadedPhoto");
        if (savedPhoto) {
            displayPhoto.src = savedPhoto;
        }
    }
});
