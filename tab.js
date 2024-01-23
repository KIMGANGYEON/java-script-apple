var tabbutton = $('.tab-button');
var tabcontent = $('.tab-content')

function tabs(num){
    tabbutton.removeClass('orange');
    tabbutton.eq(num).addClass('orange');
    tabcontent.removeClass('show');
    tabcontent.eq(num).addClass('show');
    
}
// for (let i = 0; i < tabbutton.length; i++){
//     tabbutton.eq(i).on('click', function(){
//         tabs(i)
//     })
// }

// var tabbutton = $('.tab-button');
// var tabcontent = $('.tab-content')

// tabbutton.eq(0).on('click', function(){
//     tabbutton.removeClass('orange');
//     tabbutton.eq(0).addClass('orange');
//     tabcontent.removeClass('show');
//     tabcontent.eq(0).addClass('show');
// });
// tabbutton.eq(1).on('click', function(){
//     tabbutton.removeClass('orange');
//     tabbutton.eq(1).addClass('orange');
//     tabcontent.removeClass('show');
//     tabcontent.eq(1).addClass('show');
// });
// tabbutton.eq(2).on('click', function(){
//     tabbutton.removeClass('orange');
//     tabbutton.eq(2).addClass('orange');
//     tabcontent.removeClass('show');
//     tabcontent.eq(2).addClass('show');
// });