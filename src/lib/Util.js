/**
 * Close all create list and create task panels
 * and display the create list button
 */
export const closeAllPanels = () => {
    const collection = document.getElementsByClassName("create-task-panel");
    for (let element of collection) {
        element.classList.add('absent');
        element.classList.remove('present');
    }

    const button = document.getElementById("create-list");
    if (button) {
        button.classList.remove('absent');
        button.classList.add('present');
    }
}

export default closeAllPanels;