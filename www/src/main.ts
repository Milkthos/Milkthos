document.addEventListener("DOMContentLoaded", () => {
    let rickButton = document.getElementById("rick");

    rickButton?.addEventListener("mouseenter", () => {
        console.log("oo a mouse");
        document.body.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/iJgNpm8cTE8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    });
});

export {};