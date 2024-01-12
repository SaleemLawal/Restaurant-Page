const [hamburgerImage, cheeseburgerImage, doubleCheeseburgerImage, steakImage, ribsImage, grilledCheeseImage, caesarSaladImage, frenchFriesImage, chefImage] =['hamburger.png', 'cheeseburger.png', 'double-cheeseburger.png', 'steak.png', 'ribs.png', 'grilled-cheese.png', 'caesar-salad.png', 'french-fries.png', 'chef.png'].map(image => require(`../images/${image}`));

export function LoadMenu(){
    // creates menu container
    const main = document.createElement('main')
    main.id = 'menu'

    function hero(){
        // creates the hero div 
        const heroDiv = document.createElement('div')
        heroDiv.classList.add('hero')

        const textTag = document.createElement('h1');

        const newImage = new Image()
        newImage.src = chefImage
        newImage.alt = "Chef"
        newImage.width = 50
        newImage.height = 50

        textTag.innerHTML = `
            <h1>Menu
            <img src="${newImage.src}" alt="${newImage.alt}" width="${newImage.width}" height="${newImage.height}">
            </h1>
        `;
        heroDiv.appendChild(textTag);
        return heroDiv;
    }

    function menuContainer(){
        const menuContainer = document.createElement("div")
        menuContainer.classList.add('menu-container')

        const images = [
            hamburgerImage,
            cheeseburgerImage,
            doubleCheeseburgerImage,
            steakImage,
            ribsImage,
            grilledCheeseImage,
            caesarSaladImage,
            frenchFriesImage,
        ]
        const foodItem = [
           "Hamburger", "Cheeseburger", "Double Cheeseburger", "Steak", "BBQ Ribs",
           "Grilled Cheese Sandwich", "Ceasar Salad", "French Fries"
        ]
        const prices = [
            "$2.49", "$2.99", "$3.49", "$11.99", "$8.99", "$4.99", "$7.99", "$1.99"
        ]
        const text = [
            "Buns, patty, tomato, onions, lettuce, and our secret family recipe.",
            "Similar to our hamburger, but with cheese.",
            "Similar to our cheeseburger, but with an extra patty.",
            "A juicy steak made just how you like it.",
            "Barbecue ribs with your choice of a add-ons.",
            "A toasted and grilled cheese sandwich, dipped in our special sauce.",
            "Your typical caesar salad that comes with your choice of dressings.",
            "Sometimes you don't want to eat your burger alone, why not add some french fries?",
        ]

        for(let i = 0; i < prices.length; i++){
            // menu item container
            const menuItem = document.createElement('div')
            menuItem.classList.add('menu-item');

            // menu item image
            const newImage = new Image()
            newImage.src = images[i]
            newImage.alt = foodItem[i]
            newImage.width = 50
            newImage.height = 50

            
            const itemContent = document.createElement('div')
            itemContent.classList.add('item-content')
            // item name and price
            const itemName = document.createElement('h4')
            itemName.innerHTML = `
                ${foodItem[i]}
                <span>${prices[i]}</span>
            `
            // item description
            const itemDescription = document.createElement('p')
            itemDescription.textContent = text[i]

            // append all the elements
            itemContent.appendChild(itemName)
            itemContent.appendChild(itemDescription)

            menuItem.appendChild(newImage)
            menuItem.appendChild(itemContent)
            menuContainer.appendChild(menuItem);
        }

        return menuContainer
    }

    main.appendChild(hero())
    main.appendChild(menuContainer())

    return main
}