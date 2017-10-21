console.log('OK');

'use strict';

document.addEventListener('DOMContentLoaded',function(){

  var forDropdown = document.querySelector('.for-dropdown');
  var dropdownMenu = document.querySelector('.dropdown');

  console.log(forDropdown, dropdownMenu);
  console.log(dropdownMenu.style);

  forDropdown.addEventListener('mouseover',function(){
    dropdownMenu.style.display="block";
  });

  forDropdown.addEventListener('mouseout',function(){
    dropdownMenu.style.display="none";
  });

});
