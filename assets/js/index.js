/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        // Calculates Reading Time
        $('.post-content').readingTime({
            readingTimeTarget: '.post-reading-time',
            wordCountTarget: '.post-word-count',
        });

        // Creates Captions from Alt tags
        $(".post-content img").each(function() {
            // Let's put a caption if there is one
            if($(this).attr("alt"))
              $(this).wrap('<figure class="image"></figure>')
              .after('<figcaption>'+$(this).attr("alt")+'</figcaption>');
        });

        $(".blog-topbar .text").each(function(index){
            var t = $(this);
            $(this).on('click',function(){
                $(".link-border").removeClass("link-border");
                t.addClass("link-border");

                $(".content").removeClass("show-sharing");
                $(".content").removeClass("show-activity");

                if(index==0)
                    $(".blog-title").html("ALL");
                else if (index==1){
                    $(".blog-title").html($(this).html());
                    $("#main-content").addClass("show-sharing");
                }
                else if (index==2){
                    $(".blog-title").html($(this).html());
                    $("#main-content").addClass("show-activity");
                }
            });
        });

        $(".post-content").find("a").attr("target", "_blank");

        $.each($("section").find("code"), function(){
            if($.trim($(this).html())=="")
              $(this).remove();
        });

    });

}(jQuery));
