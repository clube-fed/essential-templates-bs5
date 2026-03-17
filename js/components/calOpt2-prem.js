//calendar option 2

$j('.club-calendar.opt2-prem [id$="EventsWrapper"]').each(function(){
$j('.event-link:first-of-type').unwrap();

});

/*
$j('.club-calendar.opt2-prem [id$="EventsWrapper"] > div').each(function(){
    $j(this).contents().unwrap();
});
*/

$j('.club-calendar.opt2-prem [id$="EventsWrapper"] > a').each(function(){
    $j('.event-image', this).css('background-image', "url("+ $j('.event-image img', this).attr("src") +")");
    //var eventTitle = $j('.event-title',this).text();
    //$j( '.event-image img:first-child', this ).attr('alt',eventTitle);
    $j( '.event-image img', this ).attr('alt','');
    $j( '.event-image img + img', this ).attr('aria-hidden','true').attr('alt','');
});