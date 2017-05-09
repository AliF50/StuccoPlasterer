$(document).ready(function() {
    $('.opening-hours li').eq(new Date().getDay()).addClass('today');
    console.log($('.opening-hours li').eq(new Date().getDay()).addClass('today'));
});
