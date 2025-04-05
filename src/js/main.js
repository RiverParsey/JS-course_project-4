import $ from './lib/lib';

$('#first').on('click', () => {
  $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
  $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
  $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, ex. Reprehenderit aliquid nostrum impedit rem illo nam unde, minima, assumenda esse dignissimos quae omnis? Commodi enim harum eaque minima autem?'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('data saved')
        }
      ],
      [
        'Another button',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('hello world');
        }
      ]
    ]
  }
}));

// $('.wrap').html(
//   `
//   <div class="dropdown">
//     <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">Dropdown button</button>
//     <div class="dropdown-menu" data-toggle-id="dropdownMenuButton">
//         <a href="#" class="dropdown-item">Action</a>
//         <a href="#" class="dropdown-item">Action #2</a>
//         <a href="#" class="dropdown-item">Action #3</a>
//     </div>
//   </div>
//   `
// );

// $('.dropdown-toggle').dropdown();