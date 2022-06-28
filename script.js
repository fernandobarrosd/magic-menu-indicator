const menuItems = document.querySelectorAll(".menu-item");


menuItems.forEach(menuItem => {
    const menuItemText = menuItem.querySelector
    (".menu-item-text");
    const menuItemIconLink = menuItem.querySelector
    (".menu-item-icon-link");

    menuItemIconLink.addEventListener("mouseenter", () => {
        setAnimation(menuItemText, 0.5, 60, 1, "visible");
    })

    menuItemIconLink.addEventListener("mouseout", () => {
        setAnimation(menuItemText, 0.5, 80, 0, "hidden");
    })
});

function setAnimation(element, secondsValue, translateValue, opacityValue, visibleValue) {
    element.style.transition = `${secondsValue}s`;
    element.style.transform = 
    `translate(${translateValue}px)`;
    element.style.opacity = opacityValue;
    element.style.visibility = visibleValue
}