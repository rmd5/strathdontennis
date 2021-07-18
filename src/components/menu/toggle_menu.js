export default function toggle_menu(id) {
    let menu = document.getElementById(id);
    let menuContent = document.getElementById(id + "_content");
    if (menu) {
        if (menu.style.visibility === "visible") {
            menuContent.style.transform = "translate(100%, 0%)";
            setTimeout(function() {
                menu.style.visibility = "hidden";
            }, 200);
        } else {
            menu.style.visibility = "visible";
            menuContent.style.transform = "translate(0%, 0%)";
        }
    }
}