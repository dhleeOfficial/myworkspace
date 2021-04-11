// Import stylesheets
import "./style.css";
import $ from "jquery";

// Write JQuery code here!
const $wrapper = $('.wrapper');
const $items = $wrapper.find('.item');

$wrapper.on('click', '.item', (e) => {
    e.stopPropagation();

    $(e.target).toggleClass('open').siblings().removeClass('open');
})

$('body').on('click', (e) => {
    $items.removeClass('open');
})

// $('body').on('click', (e) => {
//     const item = $(e.target);

//     if (item.is('.item')) {
//         item.toggleClass('open').siblings().removeClass('open');
//     } else {
//         $items.removeClass('open');
//     }
// })