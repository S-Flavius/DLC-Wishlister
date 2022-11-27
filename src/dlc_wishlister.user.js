// ==UserScript==
// @name         DLC wishlister
// @namespace    https://github.com/S-Flavius/DLC-Wishlister
// @version      1.0
// @description  Automatically adds DLC for owned games to your wishlist
// @author       S-Flavius
// @match        https://store.steampowered.com/app/*
// @updateURL    https://github.com/S-Flavius/DLC-Wishlister/raw/master/src/dlc_wishlister.meta.js
// @downloadURL  https://github.com/S-Flavius/DLC-Wishlister/raw/master/src/dlc_wishlister.user.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=steampowered.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let wishlistButton = document.getElementById('add_to_wishlist_area');
    let reasons = document.getElementsByClassName('reason info');
    
    for (const reason of reasons){
        if (reason.innerText == "You own the base game" && wishlistButton.style.display !== 'none') {
            wishlistButton.children[0].click();
            return;
        }
    }
})();
