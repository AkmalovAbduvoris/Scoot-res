<script setup>
import { RouterLink } from 'vue-router';
import './Footer.scss'
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__wrapper-t">
                    <router-link to="/">
                        <img class="footer__img" src="/img/header__logo.svg" width="107" height="29" alt="logo">
                    </router-link>
                    <ul class="footer__list">
                        <li class="footer__item">
                            <router-link to="/" class="footer__text" >About </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/" class="footer__text" >Location </router-link>
                        </li>
                        <li class="footer__item">
                            <router-link to="/" class="footer__text" >Careers </router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__icons">
                    <img src="/img/footer__facebook.svg" width="24" height="24" alt="facebook">
                    <img src="/img/footer__twitter.svg" width="24" height="24" alt="twitter">
                    <img src="/img/footer__instagramm.svg" width="24" height="24" alt="instagramm">
                </div>
            </div>
        </div>
    </footer>
</template>