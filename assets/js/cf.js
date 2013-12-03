/*! 
 *  Written for: Light weight customized checkboxes and radio buttons jquery plugin
 *  Author: @ElmahdiMahmoud
 *  updated: 03.12.13
 *  license: under MIT License - http://www.opensource.org/licenses/mit-license.php
 */
;(function($, window, document, undefined) {
    $.fn.cf = function() {
    return this.each(function() {
        var 
            $this    = $(this),
            $ccbx    = $this.find('.ccbx'),
            $crbtn   = $this.find('.crbtn'),
            checkbox = $ccbx.find(':checkbox'),
            radiobtn = $ccbx.find('input:radio'),
            innerEls = '<span><i></i></span>';
        $ccbx.find('input').wrap(innerEls);
        $ccbx.on('click', function(e) {
        e.preventDefault();
            var 
                $this = $(this);
                $this.toggleClass('checked');
                $this.find(':checkbox').attr('checked', $this.hasClass('checked'));
        });
            $this.find('[checked="checked"]').closest('.ccbx').addClass('checked');
            $this.find('[checked="checked"]').closest('.crbtn').addClass('pushed');
        if (checkbox.is(':disabled')) {
            $this.find(':disabled').parent().parent().parent('.ccbx').off().addClass('disabled');
        }
        $crbtn.find('input').wrap(innerEls);
        $crbtn.on('click', function(event) {
        event.preventDefault();
            var
                _this  = $(this),
                $radio = _this.find('input:radio');
            $crbtn.find('input:radio[name="' + $radio.attr('name') + '"]').each(function() {
            $(this).attr('checked', false);
            $(this).closest('label').removeClass('pushed');
        });
        _this.addClass('pushed');
        _this.find('input:radio').attr('checked', _this.hasClass('pushed'));
        });
        if (radiobtn.attr("disabled", true)) {
            $this.find(':disabled').parent().parent().parent('.crbtn').off().addClass('disabled');
        }
    });
    }
})(jQuery, window, document);
