//card option 3
$j('.card-panels.opt3 .card').each(function () {
    $j('.card-text .mpContent > a:not([class*="abut"])', this).append("<span class='nc-icon-outline arrows-1_circle-right-37'></span>");
    // Add alt text to images based on callout title
    var calloutTitle = $j.trim($j('.card-text .mpContent > *:first-child', this).text());
    var ImageAltText = "" + calloutTitle;
    var altAttr = $j('.card-img .mpContent img', this).attr('alt');
    if (altAttr) {
        // Element has alt attribute
    } else {
        $j('.card-img .mpContent img', this).attr('alt', ImageAltText);
    }
});
