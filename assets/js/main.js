$(document).ready(function() {
    /* GA Setup */
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-3V6SF6XYK7');
    /* End GA Setup */

    $('.answer').click(function(e) {
        $('.answer').removeClass('guessed');
        $(this).addClass('guessed');
    });
    $('.enter-button').click(function(e) {
        $('.enter-button').hide();
        $('.answers').css('pointer-events','none');
        if($('.guessed').attr('id') == 'a1'){
            $('.feedback').addClass('correct');
            correctAnswer();
        } else {
            console.log('wrong');
            $('.guessed').addClass('wrong').removeClass('guessed');
            $('#a1').addClass('correct');
            $('.feedback').addClass('wrong');
            $('.feedback').html('Oops!');
        }
    });

    $('.scan-new-code').click(function(e){
        location.href = "/scan";
    })

    $('#mobile_menu_button').click(function(e) {
        $('.mobile-nav').css('display', 'flex');
        $('.blocker').css('display', 'block');
        $('body').addClass('menu-open');
    });
    $('.mobile-close-button').click(function(e) {
        $('.mobile-nav').css('display', 'none');
        $('.blocker').css('display', 'none');
        $('body').removeClass('menu-open');
    });
    $('.mobile-nav a').click(function(e) {
        e.preventDefault();
        console.log(e.target.href);
        $('.mobile-close-button').click();
        location.href=e.target.href;
    });

    

    shuffleAnswers();
    checkScore();
});
$(function() { // Android fix hack
    if(navigator != undefined && navigator.userAgent != undefined) {
        user_agent = navigator.userAgent.toLowerCase();
        if(user_agent.indexOf('android') > -1) { // Is Android.
            $(document.body).addClass('android');
        }
    }
});
function shuffleAnswers(){
    if(document.querySelector('.answers')){
        var answers = document.querySelector('.answers');
        for (var i = answers.children.length; i >= 0; i--) {
            answers.appendChild(answers.children[Math.random() * i | 0]);
        }
    }
}
    

function correctAnswer(){
    var score = 0;
    if(localStorage.getItem('score') > 0){
        score = parseInt(localStorage.getItem('score'));
        score+=1;
        if(score > 5){
            score = 5;
        }
        if(score == 5){
            setTimeout(function(){
                location.href="/vault.html";
            },1000);
        }
        localStorage.setItem('score', score);
    } else {
        localStorage.setItem('score', 1);
    }
    checkScore();
}

function checkScore(){
    var score = getScore();
    for(var i = 0; i <= score; i++){
        $('#p'+i).attr('src','../assets/images/mickey-icon-on.png');
    }
    if(score == 5){
        $('#lock_icon').attr('src','../assets/images/lock-icon-on.png');
        $('#prize_vault_display').click(function(e){
            location.href = "prizes.html";
        });
        $('#answer_feedback').html('Great job! Tap below to open the vault:');
    }
}

function getScore(){
    var score = 0;
    if(localStorage.getItem('score') > 0){
        score = parseInt(localStorage.getItem('score'));
    }
    return score;
}