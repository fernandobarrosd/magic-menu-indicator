const menuItems = document.querySelectorAll(".menu-item");


menuItems.forEach(menuItem => {
    const menuItemText = menuItem.querySelector
    (".menu-item-text");
    const menuItemIcon = menuItem.querySelector
    (".menu-item-icon");
    
    menuItemIcon.addEventListener("mouseenter", () => {
       setAnimation(menuItemText, 0.5, 60, 1);
       menuItemText.style.visibility = "visible";
    })

    menuItemIcon.addEventListener("mouseout", () => {
        setAnimation(menuItemText, 0.5, 80, 0);
        menuItemText.style.visibility = "hidden";
    })
});

function setAnimation(element, secondsValue, translateValue, opacityValue) {
    element.style.transition = `${secondsValue}s`;
    element.style.transform = 
    `translate(${translateValue}px)`;
    element.style.opacity = opacityValue;
}