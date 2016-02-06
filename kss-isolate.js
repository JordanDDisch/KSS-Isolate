jQuery(function($) {

    var kssIsolate = {

        isolate: function(selected) {
            if(selected[0] != "#") {
                selected = "#" + selected;
            }
            $(".kss-section").each(function(){
                $(this).not(selected).toggleClass("kss-isolate--hide");
            });
            $(".kss-isolate__button").toggleClass("kss-isolate--active");
            $('body').toggleClass("kss-isolate");
        },
        hideComponents: function() {
            $(".kss-isolate__button").click(function(el) {
                var selectedId = $(el.currentTarget).parents(".kss-section")[0].id;

                kssIsolate.isolate(selectedId);

                if($(this).hasClass("kss-isolate--active")) {
                    $(this).text("List");
                    document.location.hash = selectedId;
                }
                else {
                    $(this).text("Isolate");
                    document.location.hash = '';
                }
            })
        },
        keepIsolation: function() {
            var urlHash = document.location.hash;
            if(urlHash != '') {
                $(urlHash).find(".kss-isolate__button").text("List");
                kssIsolate.isolate(urlHash);
            }
        }
    };

    $(document).ready(function() {

        $(".kss-section").each(function(){
            $(this).find(".kss-modifier__heading").append("<button class='kss-isolate__button'>Isolate</button>");
        });

        kssIsolate.hideComponents();

        kssIsolate.keepIsolation();
    });
});
