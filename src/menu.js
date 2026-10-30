function displayMenu(menuItems) {
    const divContent = document.getElementById("content");

    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">
                    <img src=${item.img} class="photo" alt="Menu Item">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">£${item.price}</h4>
                        </header>
                        <p class="item-text ${item.category}">
                            ${item.desc}
                        </p>
                    </div>
                </article>`;
    });

    displayMenu = ['<div class="section-center">', displayMenu, '</div>'];
    displayMenu = displayMenu.join("");
    divContent.innerHTML = displayMenu;

}

export { displayMenu };