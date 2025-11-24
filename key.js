// ==UserScript==
// @name         KEY Storage
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Store the secret key
// @match        *://www.rophim.me/*
// @match        *://www.rophim.mx/*
// @match        *://www.rophim.li/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Key bạn muốn
    let key = "https://discord.gg/NightMarketServer";

    // Lưu key vào Tampermonkey storage
    GM_setValue("auth_key", key);

    console.log("KEY Storage Script: Key has been saved.");
})();
