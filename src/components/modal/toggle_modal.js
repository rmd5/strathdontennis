export default function toggle_modal(id) {
    let modal = document.getElementById(id);
    let modalContent = document.getElementById(id + "_content");
    if (modal) {
        if (modal.style.visibility === "visible") {
            modal.style.visibility = "hidden"
        } else {
            modal.style.visibility = "visible";
        }
    }
}