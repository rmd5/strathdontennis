export default function toggle_modal(id) {
    let modal = document.getElementById(id);
    let modalContent = document.getElementById(id + "_content");
    if (modal) {
        if (modal.style.visibility === "visible") {
            modalContent.style.transform = "translate(100%, 0%)";
            setTimeout(function() {
                modal.style.visibility = "hidden";
            }, 200);
        } else {
            modal.style.visibility = "visible";
            modalContent.style.transform = "translate(0%, 0%)";
        }
    }
}