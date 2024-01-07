let aboutButtonEl = document.getElementById("aboutButton");
let timeToVisitButtonEl = document.getElementById("timeToVisitButton");
let attractionsButtonEl = document.getElementById("attractionsButton");
let aboutTabEl = document.getElementById("aboutTab");
let timeToVisitTabEl = document.getElementById("timeToVisitTab");
let attractionsTabEl = document.getElementById("attractionsTab");

aboutTabEl.classList.add("d-none")
timeToVisitTabEl.classList.add("d-none")
attractionsTabEl.classList.add("d-none")

function onClickAboutTab() {
    aboutTabEl.classList.remove("d-none")
    aboutButtonEl.classList.add("selected-button")

    timeToVisitTabEl.classList.add("d-none")
    timeToVisitButtonEl.classList.remove("selected-button")

    attractionsTabEl.classList.add("d-none")
    attractionsButtonEl.classList.remove("selected-button")
}

function onClickTimeToVisitTab() {
    timeToVisitTabEl.classList.remove("d-none")
    timeToVisitButtonEl.classList.add("selected-button")

    aboutTabEl.classList.add("d-none")
    aboutButtonEl.classList.remove("selected-button")

    attractionsTabEl.classList.add("d-none")
    attractionsButtonEl.classList.remove("selected-button")
}

function onClickAttractionsTab() {
    attractionsTabEl.classList.remove("d-none")
    attractionsButtonEl.classList.add("selected-button")

    aboutTabEl.classList.add("d-none")
    aboutButtonEl.classList.remove("selected-button")

    timeToVisitTabEl.classList.add("d-none")
    timeToVisitButtonEl.classList.remove("selected-button")
}