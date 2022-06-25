import '../css/style.css'
import Alpine from 'alpinejs'
import program from './data_program'
 
window.Alpine = Alpine
 
Alpine.start()
Alpine.data('data_program', program)