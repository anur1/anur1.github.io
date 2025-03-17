
//Listen if Html page is loaded, if loaded call menuItems 
window.addEventListener('DOMContentLoaded', function () {
    function4_menuItems();
    function4_homePage();
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


function function4_homePage() {
    fetch('./data/menu/home.json')
        .then(response => response.json())
        .then(data => {
            const mainCardContainer = document.getElementById('main-card-container');

            data.sections.forEach(item => {
                const cardElement = document.createElement('div');
                const cardBackgroundColor = item.color; // Set background color
                console.log(cardBackgroundColor);
                cardElement.innerHTML = `

                <div id="${item.id}" class="card bg-info text-dark content-card mt-5 zoom-effect custom-card" style="background-color:${cardBackgroundColor} !important">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-3 d-flex align-items-center">
                                <!-- Image for the first column -->
                                <img src="${item.image.src}"alt="Smart City Digital Twin"
                                    class="img-fluid custom-image ">
                            </div>

                            <div class="col-md-7" id = "card-info-container">
                                <!-- Content for the second column -->
                                <h2>${item.content.title}</h2>
                                <p>${item.content.paragraphs}</p>


                            </div>
                            <div class="col-md-2">
                                <!-- Keywords for the third column -->
                                <p><strong>Keywords: </strong>${item.content.keywords}</p>

                            </div>
                        </div>
                    </div>
                </div>
                `;//end of cardElement.innerHTML

                //add above card element to the main card container
                mainCardContainer.appendChild(cardElement);
            });

        })
        .catch(error => console.error('Error:', error));
}
