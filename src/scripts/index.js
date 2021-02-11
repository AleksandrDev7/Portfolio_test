import '../styles/index.scss';
import '../styles/normalize.scss';
import '../styles/header.scss';
import '../styles/slider.scss';
import '../styles/footer.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';


if (process.env.NODE_ENV === 'development') {
    require('../index.html');
}

console.log('webpack starterkit');


$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 40,
        nav: true,
        smartSpeed:1000,
        responsive: {
            0: {
                items: 1
            },
            320: {
                items: 2,
                margin: 20
            },
            600: {
                items: 4
            },
        }
    });
});
