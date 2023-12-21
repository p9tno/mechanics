$(document).ready(function() {
    let path = 'json/';

    function initLabImage() {
        let lab1 = bodymovin.loadAnimation({
            container: document.getElementById('lab1'), // Required
            path: path + 'lab1.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab1",
        })
        let lab2 = bodymovin.loadAnimation({
            container: document.getElementById('lab2'), // Required
            path: path + 'lab2.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab2",
        })
        let lab3 = bodymovin.loadAnimation({
            container: document.getElementById('lab3'), // Required
            path: path + 'lab3.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab3",
        })
        let lab4 = bodymovin.loadAnimation({
            container: document.getElementById('lab4'), // Required
            path: path + 'lab4.json', // Required
            renderer: 'svg', // Required
            loop: false, // Optional
            autoplay: false, // Optional
            name: "lab4",
        })
    }
    initLabImage();
})
