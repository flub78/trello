// alert('Trello.js loaded!');

toggleSidebar = function () {

    var sidebar = document.getElementById("left-sidebar");
    var closeButton = document.getElementById("close-sidebar-button");
    var openButton = document.getElementById("open-sidebar-button");

    sidebar.classList.toggle("open-sidebar");
    sidebar.classList.toggle("close-sidebar");

    closeButton.classList.toggle("visible");
    closeButton.classList.toggle("hidden");

    openButton.classList.toggle("visible");
    openButton.classList.toggle("hidden");
}

/**
 * Callback activated when a task list is dragged
*/
dragList = function (event) {
    var id = event.target.id;

    console.log("Drag event started : " + id);
    event.dataTransfer.setData("text", event.target.id);
}

/**
 * Callback activated when a task list is dropped
*/
dropList = function (event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var target = event.target.id;

    console.log(data + " dropped  on " + target);

    event.target.appendChild(document.getElementById(data));
}

/**
 * Callback activated when a task list is dragged
*/
allowDrop = function (event) {
    // console.log("allowDrop " + event);
    event.preventDefault();
}