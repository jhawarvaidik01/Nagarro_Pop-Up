var tog=true;
$(document).ready(function(){
    $('.clicks').on('click',function(){
        if(tog==true)
        {
            tog=false;
            $('#box').addClass('show');
        }
        else
        {
            tog=true;
            $('#box').removeClass('show');
        }

    })
    $('.icon').on('click',function(){
        $('#box').removeClass('show');
    })
    $('.clicks').on('click',function(){
        $('#box').addClass('show');
    })
    $('.submission').on('click',function(){
        $('#box').removeClass('show')
    })
});