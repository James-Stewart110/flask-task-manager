// Navbar
$(document).ready(function(){
    $('.sidenav').sidenav({edge: 'right'}); // Navbar
    $('.collapsible').collapsible(); // Accordion
    $('.tooltipped').tooltip(); //Tooltip
    $('.datepicker').datepicker({
        format: 'dd mmmm, yyyy',
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: 'Select'
        }
    }); //Datepicker
  });


