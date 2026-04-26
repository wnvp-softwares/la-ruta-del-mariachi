document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        this.style.transform = "scale(0.97)";

        setTimeout(() => {
            this.style.transform = "translateY(-8px) scale(1.05)";
        }, 150);
    });
});
