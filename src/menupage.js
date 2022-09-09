export function menuPage() {
    const title = document.createElement('div')
    // const backgroundImage = document.createElement('img')
    const menuItem1 = document.createElement('div')
    const menuItem2 = document.createElement('div')
    const menuItem3 = document.createElement('div')
    const menuItem4 = document.createElement('div')
    const menuItem5 = document.createElement('div')
    const menuItem6 = document.createElement('div')
    const menuItem7 = document.createElement('div')
    const menuItem8 = document.createElement('div')
    const steak = document.createElement('img')
    const burger = document.createElement('img')
    const eggs = document.createElement('img')
    const sandwich = document.createElement('img')
    const chicken = document.createElement('img')
    const salad = document.createElement('img')
    const beer = document.createElement('img')
    const mixedDrink = document.createElement('img')

    title.setAttribute('id', 'header')
    title.innerText = 'MENU'

    // backgroundImage.setAttribute('id', 'backgroundImage')
    // backgroundImage.setAttribute('src', '/src/D69aQ0gk_400x400 (1).jpg')

    menuItem1.setAttribute('class', 'menuItem')
    menuItem1.innerText = 'Steak'
    steak.setAttribute('src', '/src/style/food/pexels-valeria-boltneva-1251208.jpg')
    menuItem1.appendChild(steak)

    menuItem2.setAttribute('class', 'menuItem')
    menuItem2.innerText = 'Burger'
    burger.setAttribute('src', '/src/style/food/pexels-rajesh-tp-1633578.jpg')
    menuItem2.appendChild(burger)

    menuItem3.setAttribute('class', 'menuItem')
    menuItem3.innerText = 'Eggs'
    eggs.setAttribute('src', '/src/style/food/pexels-christopher-alonzo-588776.jpg')
    menuItem3.appendChild(eggs)

    menuItem4.setAttribute('class', 'menuItem')
    menuItem4.innerText = 'Sandwich'
    sandwich.setAttribute('src', '/src/style/food/pexels-rajesh-tp-1633525.jpg')
    menuItem4.appendChild(sandwich)

    menuItem5.setAttribute('class', 'menuItem')
    menuItem5.innerText = 'Chicken'
    chicken.setAttribute('src', '/src/style/food/pexels-omar-mahmood-106343.jpg')
    menuItem5.appendChild(chicken)

    menuItem6.setAttribute('class', 'menuItem')
    menuItem6.innerText = 'Salad'
    salad.setAttribute('src', '/src/style/food/pexels-daria-shevtsova-1580466.jpg')
    menuItem6.appendChild(salad)

    menuItem7.setAttribute('class', 'menuItem')
    menuItem7.innerText = 'Beer'
    beer.setAttribute('src', '/src/style/food/milton-wiklund-7OZUmXRcgOE-unsplash.jpg')
    menuItem7.appendChild(beer)

    menuItem8.setAttribute('class', 'menuItem')
    menuItem8.innerText = 'Mixed Drink'
    mixedDrink.setAttribute('src', '/src/style/food/andreas-m-Ug8GLlQT1oE-unsplash.jpg')
    menuItem8.appendChild(mixedDrink)

    return { title, menuItem1, menuItem2, menuItem3, menuItem4, menuItem5, menuItem6, menuItem7, menuItem8 }
}