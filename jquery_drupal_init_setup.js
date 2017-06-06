//place this in a js file in your custom module
(function ($) {
    Drupal.behaviors.ec_task_credits = {
        attach: function (context, settings) { //begin wrapper
			
			//all the good stuff goes in between
			
            //example 1
            $(window).load(function() {
                console.log('My JS File Is Loaded');
            });

            //example 2
            if ($('.task-credit-complete').length > 0) {
                $('.task-credit-complete').fadeOut();
            }

            //example click listener
            $(function() {
                $("#mycancel").click(function() {
                    history.back(1);
                });
            });

			
        } //end wrapper
    };
})(jQuery);
