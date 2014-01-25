console.log('Loaded');
$(document).ready(function(){
    $('.number-wrapper').click(function(){
        $('.type-indicator').show();
        setInterval(function(){
            if ($('.type-indicator').css('display') === 'none') $('.type-indicator').show();
            else $('.type-indicator').hide();
        },800);
    });
    $('body').keydown(function(event){
        event.preventDefault();
        if(event.which >= 48 && event.which <=57){
            var newNum = $('<div class="number">');
            newNum.text(String.fromCharCode(event.which));
            $('#top-in-out').append(newNum);
        }
        else if (event.which === 8){
            var prevNums = $('#top-in-out').children();
            prevNums[prevNums.length -1].remove();
        }
    });
});