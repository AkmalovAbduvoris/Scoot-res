<script setup>
import { ref } from 'vue';
import './Header.scss'

const clicked = ref(false)
const btnClicked = ref(false)
function hamburger(){
    clicked.value = !clicked.value
    btnClicked.value = !btnClicked.value
}
</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="hamburger">
                    <img @click="hamburger" src="/img/hamburger.svg" alt="">
                </div>
                <div class="header__wrapper-t">
                    <router-link to="/">
                        <img class="header__img" src="/img/header__logo.svg" width="107" height="29" alt="logo">
                    </router-link>
                    <nav class="header__nav">
                        <ul class="header__list" :class="{isOpen:clicked}">
                            <li class="header__item">
                                <router-link to="/" class="header__text">About </router-link>
                            </li>
                            <li class="header__item">
                                <router-link to="/" class="header__text">Location </router-link>
                            </li>
                            <li class="header__item">
                                <router-link to="/" class="header__text">Careers </router-link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div></div>
                <button class="header__btn" :class="{openBtn:btnClicked}">Get Scootin</button>
            </div>
        </div>
    </header>
</template>