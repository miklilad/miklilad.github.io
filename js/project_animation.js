function showProject(id) {
    let projector = document.getElementById("proj0");
    projector.style.display = "block";
    fetch('../assets/projects.json')
    .then(response => response.json())
    .then(function (data) {
            let obj = data[id];
            projector.querySelector("video").setAttribute("src", obj["videoSource"]);
            projector.querySelector("p").title = obj[title];
        }
    );
}