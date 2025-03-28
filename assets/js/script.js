
//Listen if Html page is loaded, if loaded call menuItems 
window.addEventListener('DOMContentLoaded', function () {
    homePageContent(); //default home page
    fill_menuItems();
 //   function4_subPage_smartCities(); //default sub page for smart cities
});

// Menu 

let selectedItemId = "smart-citites"; 
function fill_menuItems() {
    fetch('./data/menu.json')
        .then(response => response.json())
        .then(data => {
            //containers for upper - lower - sub menu items
            const menuContainer = document.getElementById('menu-container');
            const submenuContainer = document.getElementById('submenu-container');
            const leftmenuContainer = document.getElementById('leftmenu-container');


            

            // Add main menu items to navigation menu
            data.menu.forEach(item => {
                const ItemId = item.id;
                const itemElement = document.createElement('div');
                itemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="#${ItemId}">${item.name}</a></li>`;

                menuContainer.appendChild(itemElement);




                
                // Add sub menu items to sub navigation menu when main item is clicked
                itemElement.addEventListener('click', () => {
                    //event.preventDefault(); // Prevent the default link behavior

                    // Remove the 'active' class from all menu items before new styling of clicked item
                    const activeItems = menuContainer.getElementsByClassName('custom-nav-link');
                    while (activeItems.length > 0) {
                        activeItems[0].classList.remove('custom-nav-link');
                    }

                    // Add the 'active' class to the clicked menu item
                    itemElement.classList.add('custom-nav-link');

                    submenuContainer.innerHTML = '';
                    leftmenuContainer.innerHTML = '';


                    // Add sub menu items to sub navigation menu from menu.json file/menu/submenu/name
                    item.submenu.forEach(subItem => {
                        const subItemElement = document.createElement('div');
                        const leftSubItemElement = document.createElement('div');
                        subItemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect">${subItem.name}</a></li>`;
                        leftSubItemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="${ItemId}.html">${subItem.name}</a></li>`;
                        submenuContainer.appendChild(subItemElement);
                        leftmenuContainer.appendChild(leftSubItemElement);


                        // Add event listener to sub menu items
                        subItemElement.addEventListener('click', () => {
                            //event.preventDefault(); // Prevent the default link behavior

                            // Remove the 'active' class from all submenu items before new styling of clicked item
                            const activeSubItems = submenuContainer.getElementsByClassName('custom-nav-link');
                            const activeLeftSubItems = leftmenuContainer.getElementsByClassName('custom-nav-link');

                            if (activeSubItems.length > 0) {
                                activeSubItems[0].classList.remove('custom-nav-link');
                                activeLeftSubItems[0].classList.remove('custom-nav-link');
                            }

                            // Add the 'active' class to the clicked submenu item
                            subItemElement.classList.add('custom-nav-link');
                            leftSubItemElement.classList.add('custom-nav-link');





                            // Load the content of the selected sub page

                           // clearMainContainer(); //clear main container before loading new content
                            const mainContainer = document.getElementById('main-card-container');
                            mainContainer.innerHTML = '';
                            //mainContainer.classList.add('row row-cols-1 row-cols-md-3 g-4 custom-cols');

                            //const subcardContainer2 = document.getElementById('sub-card-container-smartCities');
                            mainContainer.innerHTML = `<div id="sub-card-container-smartCities" class="row row-cols-1 row-cols-md-3 g-4 custom-cols">
                </div>`;
                            const subcardContainer2 = document.getElementById('sub-card-container-smartCities');
                            fetch('./data/cards-smartCity.json')
                                .then(response => response.json())
                                .then(data => {


                                    
                                    data.cards.forEach(item => {
                                        const cardElement = document.createElement('div');
                                        cardElement.innerHTML = `
                    <div class="col">
                        <div class="card h-100" style="background-color: ${item.backgroundColor};">
                            <img src="${item.image}" class="card-img-top" alt="${item.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${item.subTitle}</h6>
                                    <p class="card-text">${item.description}</p>
                                    <a href="${item.buttonLink}" class="btn btn-primary">${item.buttonText}</a>
                                </div>
                        </div>
                    </div >
         

                    `;//end of cardElement.innerHTML

                                        //add above card element to the main card container
                                        subcardContainer2.appendChild(cardElement);
                                    });
                                });


                        });
                    });

                })

                /*
 

                  


                });

                */





                /*
                
                                // Add sub menu items to left navigation menu
                                itemElement.addEventListener('click', () => {
                                    event.preventDefault(); // Prevent the default link behavior
                
                                    submenuContainer.innerHTML = '';
                                    leftmenuContainer.innerHTML = '';
                
                                    // Add sub menu items to sub navigation menu from menu.json file/menu/submenu/name
                                    item.submenu.forEach(subItem => {
                                        const subItemElement = document.createElement('div');
                                        const leftSubItemElement = document.createElement('div');
                
                                        subItemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="#${subItem.id}">${subItem.name}</a></li>`;
                                        leftSubItemElement.innerHTML = `<li class="nav-item"> <a class="nav-link zoom-effect" href="${subItem.id}.html">${subItem.name}</a></li>`;
                
                                        submenuContainer.appendChild(subItemElement);
                                        leftmenuContainer.appendChild(leftSubItemElement);
                
                                        // Add event listener to sub menu items
                                        subItemElement.addEventListener('click', () => {
                                            event.preventDefault(); // Prevent the default link behavior
                
                                            // Remove the 'active' class from all submenu items before new styling of clicked item
                                            const activeSubItems = submenuContainer.getElementsByClassName('custom-nav-link');
                                            const activeLeftSubItems = leftmenuContainer.getElementsByClassName('custom-nav-link');
                                            
                                            while (activeSubItems.length > 0) {
                                                activeSubItems[0].classList.remove('custom-nav-link');
                                                activeLeftSubItems[0].classList.remove('custom-nav-link');
                                            }
                
                                            // Add the 'active' class to the clicked submenu item
                                            subItemElement.classList.add('custom-nav-link');
                                            leftSubItemElement.classList.add('custom-nav-link');
                                        });
                
                                    });
                                });
                 */



            });



        })
        .catch(error => console.error('Error:', error));
}



/*navbarLoader.js:
The loadNavbar function takes two parameters:
placeholderId: The ID of the element where the navbar will be inserted.
navbarPath: The path to the navbar.html file.
It uses fetch to load the HTML content and inserts it into the specified placeholder.*/
function loadNavbar(placeholderId, navbarPath) {
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
        })
        .catch(error => console.error('Error loading navbar:', error));
}



function loadLeftSubmenu(placeholderId, navbarPath) {
    const placeholder = document.getElementById(placeholderId);
    if (!placeholder.dataset.loaded) {
        fetch(navbarPath)
            .then(response => response.text())
            .then(data => {
                placeholder.innerHTML = data;
                placeholder.dataset.loaded = true; // Mark as loaded
            })
            .catch(error => console.error('Error loading navbar:', error));
    }
}



function homePageContent() {
    fetch('./data/home.json')
        .then(response => response.json())
        .then(data => {
            const mainCardContainer = document.getElementById('main-card-container');

            data.sections.forEach(item => {
                const cardElement = document.createElement('div');
                const cardBackgroundColor = item.color; // Set background color
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



function function4_subPage_smartCities() {

   

}



function clearMainContainer() {
    const mainContainer = document.getElementById('main-card-container');
    mainContainer.innerHTML = '';
}





/*


function function4_subPage_smartCities() {

    fetch('./data/cards-smartCity.json')
        .then(response => response.json())
        .then(data => {
            const cardContainer = document.getElementById('sub-card-container-smartCities');
            cardContainer.parentElement.innerHTML = `<div id="sub-card-container-smartCities" class="row row-cols-1 row-cols-md-3 g-4 custom-cols">
                </div>`;
            data.cards.forEach(item => {
                const cardElement = document.createElement('div');
                cardElement.innerHTML = `
                    <div class="col">
                        <div class="card h-100" style="background-color: ${item.backgroundColor};">
                            <img src="${item.image}" class="card-img-top" alt="${item.title}">
                                <div class="card-body">
                                    <h5 class="card-title">${item.title}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">${item.subTitle}</h6>
                                    <p class="card-text">${item.description}</p>
                                    <a href="${item.buttonLink}" class="btn btn-primary">${item.buttonText}</a>
                                </div>
                        </div>
                    </div >
         

                    `;//end of cardElement.innerHTML

                //add above card element to the main card container
                cardContainer.appendChild(cardElement);
            });

        })
        .catch(error => console.error('Error:', error));
}

*/