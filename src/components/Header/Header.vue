<script setup>
import './Header.vue'
</script>
<script>
import './Header.scss'
</script>
<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <div class="hamburger">
                    <img src="/img/hamburger.svg" alt="">
                </div>
                <div class="header__wrapper-t">
                    <router-link to="/">
                        <img class="header__img" src="/img/header__logo.svg" width="107" height="29" alt="logo">
                    </router-link>
                    <nav class="header__nav">
                        <ul class="header__list">
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
                <button class="header__btn">Get Scootin</button>
            </div>
        </div>
    </header>
</template>