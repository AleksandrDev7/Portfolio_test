import '../styles/index.scss';
import '../styles/normalize.scss';
import '../styles/header.scss';
import '../styles/slider.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

console.log('webpack starterkit');


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        responsive: {
            350: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
});
