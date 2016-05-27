(function(jQuery, mbrApp) {
    mbrApp.regExtension({
        name: "back-to-top",
        events: {
            load: function() {
                var a = this;
                a.addFilter("publishHTML", function(b) {
                    var c = a.projectSettings["back-to-top"] || "";
                    return c ? b.replace(
					'</body>', 
					'\n\n\x3c!-- Back to top --\x3e\n'
					+ '<span id="top-link-block" class="hidden"><a href="javascript://"  onclick="$(\'html,body\').animate({scrollTop:0},\'slow\');return false;" class="btn btn-primary"><span class="glyphicon glyphicon-menu-up"></span></a></span>'
					+ '<script>if(($(window).height()+100)<$(document).height()){$(\'#top-link-block\').removeClass(\'hidden\').affix({offset:{top:100}});}</script>'
					+ '<style> #top-link-block.affix-top{position:absolute;bottom:-82px;right:10px;}#top-link-block.affix{position:fixed;bottom:18px;right:10px;z-index:10;}</style>'
					+ '\n</body>') : b
                });
                a.addFilter("additionalPageSettings", function(b) {
					var c = a.projectSettings["back-to-top"] || "";
					return b + [
							'<div class="form-group clearfix">\n<label class="col-md-3 control-label">Back to top button</label>\n<div class="togglebutton col-md-9">\n<label style="width: 100%;">',
							'<input type="checkbox" id="site-settings-back-to-top" name="back-to-top" ' + ("" != c ? "checked" : "") + '><span class="toggle" style="margin-top: -6px;"></span>', 
							"</label>\n</div>", 
							"</div>"
							].join("\n")
                })
            }
        }
    })
})(jQuery, mbrApp);