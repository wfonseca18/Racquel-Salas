
if (screen.width >= 1024) {
    $('.responsive-header').removeClass('col-sm-12');
    $('.responsive-header').addClass('col-sm-6');
}

$('#icon').on('click', function(){
    $('.px-3').toggleClass('responsive');
    $('.icon').toggleClass('active');
})
