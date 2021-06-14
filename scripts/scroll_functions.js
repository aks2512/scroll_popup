$(document).ready()
{
    displayPopUpHorizontal();
}

(function($) {
    $.fn.hasScrollBar = function() {
        var e = this.get(0);
        return {
            vertical: e.scrollHeight > e.clientHeight,
            horizontal: e.scrollWidth > e.clientWidth
        };
    }
})(jQuery);

//verify div element have a table with scroll activated
function displayPopUp()
{
    var scrolls = $('.scroll');//elements class
    scrolls.each(function(){        
        var popup_scroll = $('#hasScroll');//element id

        //hover event
        $(this).hover(function(){

            if($(this).hasScrollBar()){//show element condition
                popup_scroll.show();
            }
        },function(){
            popup_scroll.hide();
        });
    });
}

//verify div element have a table with scrolly activated
function displayPopUpHorizontal()
{
    var scrolls = $('.scroll');//elements class
    console.log(scrolls)
    scrolls.each(function(){        
        var popup_scroll = $('#hasScroll');//element id

        //hover event
        $(this).hover(function(){

            if($(this).hasScrollBar().horizontal){//show element condition
                popup_scroll.show();
            }
        },function(){
            popup_scroll.hide();
        });
    });
}

//verify div element have a table with scrollx activated
function displayPopUpVertical()
{
    var scrolls = $('.scroll');//elements class
    scrolls.each(function(){        
        var popup_scroll = $('#hasScroll');//element id

        //hover event
        $(this).hover(function(){

            if($(this).hasScrollBar().vertical){//show element condition
                popup_scroll.show();
            }
        },function(){
            popup_scroll.hide();
        });
    });
}



