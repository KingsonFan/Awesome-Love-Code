$(function() {
    $('#yes').click(function(event) {
        modal('I knew the you would be willing~(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('Let me tell you！', A);
    });
});

function A() {
    modal('I Love you！', B);
}

function B() {
    modal('i know you waiting i told you!', C);
}

function C() {
    modal('please do not reject me!', D);
}

function D() {
    modal('I want you!', E);
}

function E() {
    modal('I need you!', F);
}

function F() {
    modal('I Love you!I Love you!', G);
}

function G() {
    modal('I will work hard for you!', H);
}

function H() {
    modal('I will be comb your hair!', I);
}
 function I() {
    modal('I will be care about you!', J)
}
function I() {
    modal('I will be tolerate you!', J)
}
function I() {
    modal('I will be accept you!', J)
}
function I() {
    modal('I will be respect!', J)
}
function I() {
    modal('Can you give me a chance?', J)
}

function J() {
    modal('♡♡♡ I LOVE YOU ♡♡♡', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
