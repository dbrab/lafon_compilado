$(document).ready(function(){
    $('.clockpicker').clockpicker({
        placement: 'bottom',
        align: 'left',
        autoclose: true,
        'default': 'now'
    }).find('input').change(function() {
        console.log(this.value);
    });
});
