
//Listen if Html page is loaded, if loaded call menuItems 
window.addEventListener('DOMContentLoaded', function () {
    function4_menuItems();
});

// Menu 
function function4_menuItems() {
    fetch('./data/menu/menu.json')
        .then(response => response.json())
        .then(data => {
            const menuContainer = document.getElementById('menu-container');
            const submenuContainer = document.getElementById('submenu-container');
            const leftmenuContainer = document.getElementById('leftmenu-container');



            // Add main menu items to navigation menu
            data.menu.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="#${item.id}">${item.name}</a></li>`;
                menuContainer.appendChild(itemElement);


                // Add sub menu items to sub navigation menu
                itemElement.addEventListener('click', () => {
                    submenuContainer.innerHTML = '';

                    item.submenu.forEach(subItem => {
                        const subItemElement = document.createElement('div');
                        subItemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="#${subItem.id}">${subItem.name}</a></li>`;
                        submenuContainer.appendChild(subItemElement);
                    })
                });


                // Add sub menu items to left navigation menu
                itemElement.addEventListener('click', () => {
                    leftmenuContainer.innerHTML = '';

                    item.submenu.forEach(subItem => {
                        const subItemElement = document.createElement('div');
                        subItemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="#${subItem.id}">${subItem.name}</a></li>`;
                        leftmenuContainer.appendChild(subItemElement);

                    });
                });



            });







        })
        .catch(error => console.error('Error:', error));
}
