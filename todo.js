// toggle (up-down) input text
$('#plus').on('click', function () {
    $('input[type="text"]').slideToggle()
});

// toggle (add-remove) class css pada element li
$('ul').on('click','li', function () {
    $(this).toggleClass('td-text');
});

// jika element span di click, maka element li akan di display none
// setelah itu di remove.
// stopPropagation() digunakan untuk menghilangkan effect bubble up
$('ul#ul2').on('click','span', function (e) {
    $(this).parent().fadeOut(400, function () {
        $(this).remove()
    });
    e.stopPropagation()
});

//bila di menekan keyboard 'Enter/Return'
// maka value yang ada pada element 'input[type="text"]'
// akan menjadi Content pada element li yang dibuat
// dan akan di append kedalam element ul
$('input[type="text"]').on('keypress', function (evt) {
    let li = document.createElement('li');
    if(evt.which === 13 || evt.keyCode ===13){
console.log(evt)
        let val= $(this).val();
        li.innerHTML = `<span>X</span> ${val}`;
        $('#ul2').append(li);
        setTimeout(()=>{
            $(this).val("");
        },200);
    }
});

