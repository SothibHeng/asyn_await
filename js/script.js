'use strict'
// import { productCard } from "../component/product_card.js"
// const renderArea = document.querySelector("#render-area")

// const BASE_URL = "http://localhost:5500/data/products.json"

// fetch(BASE_URL).then(res => res.json()).then((data) => {
//     data.map((product) => {
//         renderArea.innerHTML += productCard(product)
//     })
// })

import {productCard} from "../component/product_card.js"
import { userCard } from "../component/user_card.js"
import { getData } from "../store/fetch_api.js"

const renderArea = document.querySelector("#render-area")
const userRender = document.querySelector("#user-render")

// map products card
const products = await getData("products")
products.map((product) => {
    renderArea.innerHTML += productCard(product)
})

// map users card
const users = await getData("users")
users.map((user) => {
    userRender.innerHTML += userCard(user)
})









