(function($) {
    // 说明文字
    // Caption
    $(".content").each(function(i) {
        $(this).find("img").each(function() {
            if (!$(this).hasClass("nofancybox")) {
                var alt = this.alt;
                if (alt) {
                    $(this).wrap(
                        "<a href='" + this.src + "' title='" + alt + "' class='fancybox' rel='gallery" + i + "' />");
                }
                else {
                    $(this).wrap(
                        "<a href='" + this.src + "' class='fancybox' rel='gallery" + i + "' />");
                }
            }
        });
    });

    // 画廊
    // Gallery
    var play = function(parent, item, callback) {
        var width = parent.width();

        item.imagesLoaded(function() {
            var _this = this[0];
            var nWidth = _this.naturalWidth;
            var nHeight = _this.naturalHeight;

            callback();
            this.animate({
                opacity: 1
            }, 500);
            parent.animate({
                height: width * nHeight / nWidth
            }, 500);
        });
    };
    $(".gallery").each(function() {
        var $this = $(this);
        var current = 0;
        var photoset = $this.children(".photoset").children();
        var all = photoset.length;
        var loading = true;

        play($this, photoset.eq(0), function() {
            loading = false;
        });

        $this.on("click", ".prev", function() {
            if (!loading) {
                var next = (current - 1) % all;
                loading = true;

                play($this, photoset.eq(next), function() {
                    photoset.eq(current).animate({
                        opacity: 0
                    }, 500);
                    loading = false;
                    current = next;
                });
            }
        }).on("click", ".next", function() {
            if (!loading) {
                var next = (current + 1) % all;
                loading = true;

                play($this, photoset.eq(next), function() {
                    photoset.eq(current).animate({
                        opacity: 0
                    }, 500);
                    loading = false;
                    current = next;
                });
            }
        });
    });
})(jQuery);
