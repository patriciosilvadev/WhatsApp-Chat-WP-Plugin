
jQuery(document).ready(function($){

    if (document.getElementById('wcw_opening').checked ) {
        $("#delay_field")["show"]();
    } else {
        $("#delay_field")["hide"]();
    }

	$("#wcw_opening").change(function() {
        $("#delay_field")[this.checked ? "show" : "hide"]();
        this.checked === true ? this.value = 1 : this.value = 0;
	});
});