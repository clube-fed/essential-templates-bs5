/******************* 
Begin Meet The Team v1 
******************/
$j( '.card-group.meet-the-team-1-prem .card' ).each( function(){    
    if (!$j.trim($j('.card-text .mpContent a',this).html()).length){ 
	   $j(this).addClass('card-no-link');
    };
    var callout_href = $j('.card-text .mpContent a',this).attr("href");
    var callout_target = $j('.card-text .mpContent a',this).attr("target");
    var outerCalloutAnchor = $j( "<div class='card-link-wrap'></div>" );
    $j(this).wrapInner( outerCalloutAnchor );
    $j(this).append("<div class='card-admin'><div class='card-cte-img'></div><div class='card-cte-txt'></div></div>");    
    $j(this).find('.card-bg-img').css('background-image', "url("+ $j(this).find('.card-bg-img .mpContent img').attr("src") +")");    
    var calloutTitle = $j.trim($j('.card-text .mpContent h4',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img',this).attr('alt');
    $j('.card-bg-img .mpContent img',this).attr('alt',ImageAltText);
    console.log(ImageAltText);
    if(!$j.trim($j('.card-bg-img .mpContent',this).html()).length) { 
	$j(this).addClass('emptyCard');
    };
    var imgCte = $j('.card-bg-img', this).children('.clickToEditDiv').detach();
    var txtCte = $j('.card-text', this).children('.clickToEditDiv').detach();
    $j(this).find('.card-admin .card-cte-img').append(imgCte);
    $j(this).find('.card-admin .card-cte-txt').append(txtCte);
    $j(this).find('.figure-bg-img .mpContent').contents().unwrap();
    //$j(this).find('.card-text .mpContent a').contents().unwrap();
});
/******************* 
End Meet The Team v1 
******************/

/******************* 
Begin Meet The Team v2 
******************/
$j( '.card-group.meet-the-team-2-prem .card' ).each( function(){    
    if (!$j.trim($j('.card-text .mpContent a',this).html()).length){ 
	   $j(this).addClass('card-no-link');
    };
    var callout_href = $j('.card-text .mpContent a',this).attr("href");
    var callout_target = $j('.card-text .mpContent a',this).attr("target");
    var outerCalloutAnchor = $j( "<div class='card-link-wrap'></div>" );
    $j(this).wrapInner( outerCalloutAnchor );
    $j(this).append("<div class='card-admin'><div class='card-cte-img'></div><div class='card-cte-name'></div><div class='card-cte-txt'></div></div>");    
    $j(this).find('.card-bg-img .mpContent').css('background-image', "url("+ $j(this).find('.card-bg-img .mpContent img').attr("src") +")");    
    var calloutTitle = $j.trim($j('.card-text .mpContent h4',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-bg-img .mpContent img',this).attr('alt');
    $j('.card-bg-img .mpContent img',this).attr('alt',ImageAltText);
    console.log(ImageAltText);
    if(!$j.trim($j('.card-bg-img .mpContent',this).html()).length) { 
	$j(this).addClass('emptyCard');
    };
    var imgCte = $j('.card-bg-img', this).children('.clickToEditDiv').detach();
    var nameCte = $j('.card-name', this).children('.clickToEditDiv').detach();
    var txtCte = $j('.card-text', this).children('.clickToEditDiv').detach();
    $j(this).find('.card-admin .card-cte-img').append(imgCte);
    $j(this).find('.card-admin .card-cte-name').append(nameCte);
    $j(this).find('.card-admin .card-cte-txt').append(txtCte);
    $j(this).find('.figure-bg-img .mpContent').contents().unwrap();
    //$j(this).find('.card-text .mpContent a').contents().unwrap();
    $j(this).find('.card-text .mpContent a[href*="mail"]').prepend("<span class='nc-icon-outline ui-1_email-83'></span>");
    $j(this).find('.card-text .mpContent a[href*="tel"]').prepend("<span class='nc-icon-outline ui-3_phone'></span>");
});
/******************* 
End Meet The Team v2 
******************/

/******************* 
Begin Meet The Team v3 
******************/
$j( '.card-group.meet-the-team-3-prem .card' ).each( function(){
    $j(this).find('.card-body .mpContent a[href*="mail"]').prepend("<span class='nc-icon-outline ui-1_email-83'></span>");
    $j(this).find('.card-body .mpContent a[href*="tel"]').prepend("<span class='nc-icon-outline ui-3_phone'></span>");
});
/******************* 
End Meet The Team v3 
******************/