/******************* 
Crossmarketing panel
******************/
$j( '.crossmarketing-panel-prem' ).each( function(){
    $j(this).append("<div class='cross-admin'><div class='cross-cte-txt'></div></div>"); 
    
    if ($j(this).find('> .mpContent').length) {
      $j(this).addClass('has-bg-img');
      $j('.cross-admin',this).append("<div class='cross-cte-img'></div>");
      var mainImgSrc = $j(this).find('> .mpContent').children('img').attr("src");
    $j('> .mpContent',this).css('background-image', "url("+ mainImgSrc +")");
    var calloutTitle = $j.trim($j('.cross-img-overlay .mpContent',this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('> .mpContent img',this).attr('alt');
    if (typeof altAttr !== typeof undefined && altAttr !== false) {
      // Element has alt attribute
    }else {
        $j('> .mpContent img',this).attr('alt',ImageAltText);
    }
    var imgCte = $j(this).children('.clickToEditDiv').detach();
    $j(this).find('.cross-admin .cross-cte-img').append(imgCte);
    }
    if ($j(this).find('.section-title').length) {
      $j(this).addClass('has-section-title');
      $j('.cross-admin',this).append("<div class='cross-cte-title'></div>");
      var titleCte = $j('.container .col-12 .section-title', this).children('.clickToEditDiv').detach(); 
      $j(this).find('.cross-admin .cross-cte-title').append(titleCte);
  }
  if ($j(this).find('.section-title').length && !$j.trim($j('.section-title .mpContent', this).html()).length) {
    $j(this).addClass('empty-section-title');
};
    
    var txtCte = $j('.container .col-12', this).children('.clickToEditDiv').detach();
    
    
    $j(this).find('.cross-admin .cross-cte-txt').append(txtCte);
    
    //$j(this).find('.container .mpContent > a').append("<span class='nc-icon-mini arrows-1_small-triangle-right'></span>");
});
/******************* 
End Crossmarketing panel 
******************/