const $form = $('form');
const $movies = $('#movies');

$form.on('click', 'button', function(){
    event.preventDefault();
    mTitle = $('#title').val();
    mRating = $('#rating').val();
    if (mTitle.length < 2){
        alert('Title must be at least 2 characters long.');
    } else if (mRating < 0 || mRating > 10) {
        alert('Rating must be between 0 and 10.')
    } else {
        $('#movies').append(`
        <tr>
            <td><button class="remove">Remove</button></td>
            <td>${mTitle}</td>
            <td>${mRating}/10</td>
        </tr>`);
    }
})

$('#movies').on('click', '.remove', function(){
    $(this).parent().parent().remove();
})

// sort alphebetically or by rating

// $('#mUp').on('click', function() {
//     let sortedUp = getTitleOrRating(1).sort((a, b) => ('' + b.children[1].innerText).localeCompare(a.children[1].innerText))
//     let $th = $('tr:has(#th)');
//     $movies.html('');
//     $movies.append($th);
//     $movies.append(sortedUp);
// })

// $('#mDown').on('click', function() {
//     let sortedDown = getTitleOrRating(1).sort((a, b) => ('' + a.children[1].innerText).localeCompare(b.children[1].innerText));
//     let $th = $('tr:has(#th)');
//     $movies.html('');
//     $movies.append($th);
//     $movies.append(sortedDown);
// })



// // fill in 'choice' with 1 for titles, 2 for ratings
// function getTitleOrRating(choice){
//     let $tr = $('tr:not(":has(#th)")');
//     let trArr = $tr.get();
//     let c = [];
//     console.log(c);
//     for (let i=0; i<trArr.length; i++){
//         c.push(trArr[i]);
//     }
//     return c;
// }