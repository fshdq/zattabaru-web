import '../css/style.css'
import 'swiper/css';
import Alpine from 'alpinejs'
import program from './data_program'
import alasan from './data_alasan'
import Swiper from 'swiper';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();
const swiper = new Swiper();
 
window.Alpine = Alpine
 
Alpine.data('data_program', program)
Alpine.data('data_alasan', alasan)
Alpine.start()