document.addEventListener("DOMContentLoaded", () => {
    const content = document.getElementById('content');

    // Function to load additional content simulate scroll
    function loadMoreContent() {
        const sections = document.querySelectorAll('section');

        // Clone each section (you can customize the content according to your use case)
        sections.forEach(section => {
            const newSection = section.cloneNode(true);
            content.appendChild(newSection);
        });
    }

    // Infinite scroll
    // window.addEventListener('scroll', () => {
    //     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 2) {
    //         loadMoreContent();
    //     }
    // });
});