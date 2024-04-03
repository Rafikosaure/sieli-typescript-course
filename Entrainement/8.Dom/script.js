"use strict";
const form = document.querySelector('form');
console.log(form.children);
const input = document.querySelector('input');
const handleSubmit = (event) => {
    event.preventDefault();
    console.log("SUBMITTED");
};
form.addEventListener('submit', handleSubmit);
