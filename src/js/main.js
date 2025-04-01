import $ from './lib/lib';

// $('.active').toggleClass();
// $('.active').addClass('hello', 'world');
// $('.active').removeClass('fajs');


// // $('.active').on('click', sayHello);
// // $('.active').off('click', sayHello);
// $('.active').click(sayHello);

// function sayHello() {
//   console.log('Hello');
// }


$('button').on('click', function() {
  $(this).toggleClass('active');
});