//Update bootstrap classes for Support Contacts page
$j('body.SupportContacts .modulewrap .container').each(function () {
    $j('#content', this).addClass('row justify-content-center');
    $j('.page-region-content', this).addClass('row justify-content-center');
    $j('.col-lg-10', this).removeClass('col-lg-offset-1').addClass('col-12');
    $j('.col-lg-4', this).addClass('col-12');
});

//Style Guide Heading Properties
function rgbToHex(rgb) {
  // Extract individual R, G, B values from the rgb string
  // It handles both rgb(r, g, b) and rgba(r, g, b, a) formats
  const match = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
  if (!match) {
    return null; // Return null if the input format is invalid
  }
  // Helper function to convert a single decimal value to a two-digit hex string
  function componentToHex(c) {
    const hex = parseInt(c).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }
  // Convert each component and concatenate them
  const r = componentToHex(match[1]);
  const g = componentToHex(match[2]);
  const b = componentToHex(match[3]);
  // If an alpha value is present, convert it as well
  let hexAlpha = '';
  if (match[4] !== undefined) {
    const alpha = Math.round(parseFloat(match[4]) * 255);
    hexAlpha = componentToHex(alpha);
  }
  return "#" + r + g + b + hexAlpha;
}
function pxToRem(pxValue, rootFontSize) {
    return (pxValue / rootFontSize) + 'rem';
}
$j('.style-guide .single-style').each(function(){
    var fontWeight = $j('> div:first-child',this).find('h1,h2,h3,h4,h5,h6,p').css('font-weight');
    var fontWeightName = "Regular";
    if (fontWeight === '100') {var fontWeightName = "Thin";}
    if (fontWeight === '200') {var fontWeightName = "Extra Light";}
    if (fontWeight === '300') {var fontWeightName = "Light";}
    if (fontWeight === '400') {var fontWeightName = "Regular";}
    if (fontWeight === '500') {var fontWeightName = "Medium";}
    if (fontWeight === '600') {var fontWeightName = "Semi-Bold";}
    if (fontWeight === '700') {var fontWeightName = "Bold";}
    if (fontWeight === '800') {var fontWeightName = "Extra Bold";}
    if (fontWeight === '900') {var fontWeightName = "Black";}
    var fontColor = $j(this).find('h1,h2,h3,h4,h5,h6,p').css('color');
    var fontColorHex = rgbToHex(fontColor)
    var fontSize = parseFloat($j(this).find('h1,h2,h3,h4,h5,h6,p').css('font-size'));
    var fontSizeRem = pxToRem(fontSize, 10);
    var fontFamily = $j(this).find('h1,h2,h3,h4,h5,h6,p').css('font-family');
    $j('.sgp-ff',this).append(fontFamily);
    $j('.sgp-fs',this).append(fontSizeRem + ' | ' + fontSize + 'px');
    $j('.sgp-fw',this).append(fontWeightName + ' (' + fontWeight + ')');
    $j('.sgp-c',this).append(fontColorHex);
});