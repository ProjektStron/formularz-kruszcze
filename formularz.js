function podsumowanie () {
if ( $('#kruszec2-stan').attr('data-stan') === "1" ) {
$('#podsumowanie span').text( 'Łączna zadeklarowana wartość do sprzedaży: ' + (Number($('#wartosc1 span').text()) + Number($('#wartosc2 span').text())).toFixed(2) + ' zł');
}
if ( $('#kruszec2-stan').attr('data-stan') === "1" && $('#kruszec3-stan').attr('data-stan') === "1" ) {
$('#podsumowanie span').text( 'Łączna zadeklarowana wartość do sprzedaży: ' + ( Number($('#wartosc1 span').text()) + Number($('#wartosc2 span').text()) + Number($('#wartosc3 span').text()) ).toFixed(2) + ' zł');
}	
if ( $('#kruszec3-stan').attr('data-stan') === "1" && $('#kruszec2-stan').attr('data-stan') === "0" ) {
$('#podsumowanie span').text( 'Łączna zadeklarowana wartość do sprzedaży: ' + (Number($('#wartosc1 span').text()) + Number($('#wartosc3 span').text())).toFixed(2) + ' zł' );
}
if ( $('#kruszec2-stan').attr('data-stan') === "0" && $('#kruszec3-stan').attr('data-stan') === "0" ) {
$('#podsumowanie span').text( 'Łączna zadeklarowana wartość do sprzedaży: ' + (Number($('#wartosc1 span').text())).toFixed(2) + ' zł' );
}
if ( $('#kruszec1-waga').val() === "" && $('#kruszec2-waga').val() === "" && $('#kruszec3-waga').val() === "" ) {
$('#podsumowanie span').text( 'Wartość zostanie podana po zważeniu metali ze wględu na brak podanej wagi. Poinformujemy Państwa o wycenie.' );
}
}
jQuery(document).ready(function( $ ) {
$('#kruszec1-proba-zloto').attr( 'value', $('#kruszec1-zloto').text() );
$('#kruszec1-rodzaj').on('change',function() {
if( $(this).val() === "gold" ) {
$('#gold1').css('display', 'block');
$('#silver1').css('display', 'none');
$('#coins1').css('display', 'none');
$('#silvercoins1').css('display', 'none');
$('#goldbars1').css('display', 'none');
$('#silverbars1').css('display', 'none');
$('label[for=kruszec1-waga]').text('Waga [g]');
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#kruszec1-zloto option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga1').css('display', '');
}
if( $(this).val() === "silver" ) {
$('#gold1').css('display', 'none');
$('#silver1').css('display', 'block');
$('#coins1').css('display', 'none');
$('#silvercoins1').css('display', 'none');
$('#goldbars1').css('display', 'none');
$('#silverbars1').css('display', 'none');
$('label[for=kruszec1-waga]').text('Waga [g]');
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#kruszec1-srebro option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga1').css('display', '');
}
if( $(this).val() === "coins" ) {
$('#gold1').css('display', 'none');
$('#silver1').css('display', 'none');
$('#coins1').css('display', 'block');
$('#silvercoins1').css('display', 'none');
$('#goldbars1').css('display', 'none');
$('#silverbars1').css('display', 'none');
$('label[for=kruszec1-waga]').text('Ilość [szt]');
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#monety1-zlote option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga1').css('display', 'none');
}
if( $(this).val() === "silvercoins" ) {
$('#gold1').css('display', 'none');
$('#silver1').css('display', 'none');
$('#coins1').css('display', 'none');
$('#silvercoins1').css('display', 'block');
$('#goldbars1').css('display', 'none');
$('#silverbars1').css('display', 'none');
$('label[for=kruszec1-waga]').text('Ilość [szt]');
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#monety1-srebrne option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga1').css('display', 'none');
}
if( $(this).val() === "goldbars" ) {
$('#gold1').css('display', 'none');
$('#silver1').css('display', 'none');
$('#coins1').css('display', 'none');
$('#silvercoins1').css('display', 'none');
$('#goldbars1').css('display', 'block');
$('#silverbars1').css('display', 'none');
$('label[for=kruszec1-waga]').text('Ilość [szt]');
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#sztabki1-zlote option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga1').css('display', 'none');
}
if( $(this).val() === "silverbars" ) {
$('#gold1').css('display', 'none');
$('#silver1').css('display', 'none');
$('#coins1').css('display', 'none');
$('#silvercoins1').css('display', 'none');
$('#goldbars1').css('display', 'none');
$('#silverbars1').css('display', 'block');
$('label[for=kruszec1-waga]').text('Ilość [szt]');
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#sztabki1-srebrne option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga1').css('display', 'none');
}
podsumowanie();
});		
$('#kruszec2-rodzaj').on('change',function() {
if( $(this).val() === "gold" ) {
$('#gold2').css('display', 'block');
$('#silver2').css('display', 'none');
$('#coins2').css('display', 'none');
$('#silvercoins2').css('display', 'none');
$('#goldbars2').css('display', 'none');
$('#silverbars2').css('display', 'none');
$('label[for=kruszec2-waga]').text('Waga [g]');
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#kruszec2-zloto option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga2').css('display', '');
}
if( $(this).val() === "silver" ) {
$('#gold2').css('display', 'none');
$('#silver2').css('display', 'block');
$('#coins2').css('display', 'none');
$('#silvercoins2').css('display', 'none');
$('#goldbars2').css('display', 'none');
$('#silverbars2').css('display', 'none');
$('label[for=kruszec2-waga]').text('Waga [g]');
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#kruszec2-srebro option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga2').css('display', '');
}
if( $(this).val() === "coins" ) {
$('#gold2').css('display', 'none');
$('#silver2').css('display', 'none');
$('#coins2').css('display', 'block');
$('#silvercoins2').css('display', 'none');
$('#goldbars2').css('display', 'none');
$('#silverbars2').css('display', 'none');
$('label[for=kruszec2-waga]').text('Ilość [szt]');
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#monety2-zlote option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga2').css('display', 'none');
}
if( $(this).val() === "silvercoins" ) {
$('#gold2').css('display', 'none');
$('#silver2').css('display', 'none');
$('#coins2').css('display', 'none');
$('#silvercoins2').css('display', 'block');
$('#goldbars2').css('display', 'none');
$('#silverbars2').css('display', 'none');
$('label[for=kruszec2-waga]').text('Ilość [szt]');
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#monety2-srebrne option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga2').css('display', 'none');
}
if( $(this).val() === "goldbars" ) {
$('#gold2').css('display', 'none');
$('#silver2').css('display', 'none');
$('#coins2').css('display', 'none');
$('#silvercoins2').css('display', 'none');
$('#goldbars2').css('display', 'block');
$('#silverbars2').css('display', 'none');
$('label[for=kruszec2-waga]').text('Ilość [szt]');
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#sztabki2-zlote option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga2').css('display', 'none');
}
if( $(this).val() === "silverbars" ) {
$('#gold2').css('display', 'none');
$('#silver2').css('display', 'none');
$('#coins2').css('display', 'none');
$('#silvercoins2').css('display', 'none');
$('#goldbars2').css('display', 'none');
$('#silverbars2').css('display', 'block');
$('label[for=kruszec2-waga]').text('Ilość [szt]');
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#sztabki2-srebrne option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga2').css('display', 'none');
}
podsumowanie();
});		
$('#kruszec3-rodzaj').on('change',function() {
if( $(this).val() === "gold" ) {
$('#gold3').css('display', 'block');
$('#silver3').css('display', 'none');
$('#coins3').css('display', 'none');
$('#silvercoins3').css('display', 'none');
$('#goldbars3').css('display', 'none');
$('#silverbars3').css('display', 'none');
$('label[for=kruszec3-waga]').text('Waga [g]');
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#kruszec3-zloto option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga3').css('display', '');
}
if( $(this).val() === "silver" ) {
$('#gold3').css('display', 'none');
$('#silver3').css('display', 'block');
$('#coins3').css('display', 'none');
$('#silvercoins3').css('display', 'none');
$('#goldbars3').css('display', 'none');
$('#silverbars3').css('display', 'none');
$('label[for=kruszec3-waga]').text('Waga [g]');
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#kruszec3-srebro option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga3').css('display', '');
}
if( $(this).val() === "coins" ) {
$('#gold3').css('display', 'none');
$('#silver3').css('display', 'none');
$('#coins3').css('display', 'block');
$('#silvercoins3').css('display', 'none');
$('#goldbars3').css('display', 'none');
$('#silverbars3').css('display', 'none');
$('label[for=kruszec3-waga]').text('Ilość [szt]');
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#monety3-zlote option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga3').css('display', 'none');
}
if( $(this).val() === "silvercoins" ) {
$('#gold3').css('display', 'none');
$('#silver3').css('display', 'none');
$('#coins3').css('display', 'none');
$('#silvercoins3').css('display', 'block');
$('#goldbars3').css('display', 'none');
$('#silverbars3').css('display', 'none');
$('label[for=kruszec3-waga]').text('Ilość [szt]');
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#monety3-srebrne option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga3').css('display', 'none');
}
if( $(this).val() === "goldbars" ) {
$('#gold3').css('display', 'none');
$('#silver3').css('display', 'none');
$('#coins3').css('display', 'none');
$('#silvercoins3').css('display', 'none');
$('#goldbars3').css('display', 'block');
$('#silverbars3').css('display', 'none');
$('label[for=kruszec3-waga]').text('Ilość [szt]');
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#sztabki3-zlote option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga3').css('display', 'none');
}
if( $(this).val() === "silverbars" ) {
$('#gold3').css('display', 'none');
$('#silver3').css('display', 'none');
$('#coins3').css('display', 'none');
$('#silvercoins3').css('display', 'none');
$('#goldbars3').css('display', 'none');
$('#silverbars3').css('display', 'block');
$('label[for=kruszec3-waga]').text('Ilość [szt]');
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#sztabki3-srebrne option:checked').val() ) ) ).toFixed(2) );
$('#pusta-waga3').css('display', 'none');
}
podsumowanie();
});
//PODSUMOWANIE ZŁOTO
$('#kruszec1-zloto').on('change',function() {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#kruszec1-zloto option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#kruszec2-zloto').on('change',function() {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#kruszec2-zloto option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#kruszec3-zloto').on('change',function() {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#kruszec3-zloto option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});	
//PODSUMOWANIE SREBRO
$('#kruszec1-srebro').on('change',function() {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#kruszec1-srebro option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
$('#kruszec2-srebro').on('change',function() {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#kruszec2-srebro option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#kruszec3-srebro').on('change',function() {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#kruszec3-srebro option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
//PODSUMOWANIE MONETY ZŁOTE
$('#monety1-zlote').on('change',function() {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#monety1-zlote option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
$('#monety2-zlote').on('change',function() {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#monety2-zlote option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#monety3-zlote').on('change',function() {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#monety3-zlote option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
//PODSUMOWANIE MONETY SREBRNE
$('#monety1-srebrne').on('change',function() {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#monety1-srebrne option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
$('#monety2-srebrne').on('change',function() {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#monety2-srebrne option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#monety3-srebrne').on('change',function() {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#monety3-srebrne option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
//PODSUMOWANIE SZTABKI ZŁOTE
$('#sztabki1-zlote').on('change',function() {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#sztabki1-zlote option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
$('#sztabki2-zlote').on('change',function() {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#sztabki2-zlote option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#sztabki3-zlote').on('change',function() {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#sztabki3-zlote option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
//PODSUMOWANIE SZTABKI SREBRNE
$('#sztabki1-srebrne').on('change',function() {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#sztabki1-srebrne option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
$('#sztabki2-srebrne').on('change',function() {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#sztabki2-srebrne option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});		
$('#sztabki3-srebrne').on('change',function() {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#sztabki3-srebrne option:checked').val() ) ) ).toFixed(2) );
podsumowanie();
});
$('.kruszec1 button.plus').on('click', function () {
if ( $( '.kruszec2' ).hasClass('d-none') ) {
$( '.kruszec2' ).removeClass('d-none');
$( '.kruszec2 select:eq(1)' ).attr('name', 'kruszec2-zloto');
$( '.kruszec2 select:eq(2)' ).attr('name', 'kruszec2-srebro');
}
if ( $( '#kruszec2-stan' ).attr('data-stan') === "0" ) $( '#kruszec2-stan' ).attr('data-stan', "1");
podsumowanie();
});		
$('.kruszec2 button.plus').on('click', function () {
if ( $( '.kruszec3' ).hasClass('d-none') ) {
$( '.kruszec3' ).removeClass('d-none');
$( '.kruszec3 select:eq(1)' ).attr('name', 'kruszec3-zloto');
$( '.kruszec3 select:eq(2)' ).attr('name', 'kruszec3-srebro');
}
if ( $( '#kruszec3-stan' ).attr('data-stan') === "0" ) $( '#kruszec3-stan' ).attr('data-stan', "1");
podsumowanie();
});
$('#minus-kruszec2').on('click', function () {
$(this).parent().addClass('d-none');
$( '.kruszec2 select:eq(1)' ).attr('name', '');
$( '.kruszec2 select:eq(2)' ).attr('name', '');
if ( $( '#kruszec2-stan' ).attr('data-stan') === "1" ) $( '#kruszec2-stan' ).attr('data-stan', "0");
podsumowanie();
});		
$('#minus-kruszec3').on('click', function () {
$(this).parent().addClass('d-none');
$( '.kruszec3 select:eq(1)' ).attr('name', '');
$( '.kruszec3 select:eq(2)' ).attr('name', '');
if ( $( '#kruszec3-stan' ).attr('data-stan') === "1" ) $( '#kruszec3-stan' ).attr('data-stan', "0");
podsumowanie();
});
var getJSON = function(url, callback) {
var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = 'json';
xhr.onload = function() {
var status = xhr.status;
if (status === 200) {
callback(null, xhr.response);
} else {
callback(status, xhr.response);
}
};
xhr.send();
};
var jsonData;
getJSON('https://sezamgold.pl/sezamcalc.json',
function(err, data) {
if (err !== null) {
console.log('Something went wrong: ' + err);
} else {
//POBRANIE WARIANTÓW CEN ZŁOTO
for (let i = 0; i < data.goldassey.length; i++) {
var gold = data.goldassey[i];
var thisprice2 = Number( gold.price_mod );
var thisprice1 = Number(gold.price_mod) + (Number(gold.price_mod) * Number((data.nbp_gold_variants[1]/100)));
var thisprice = Number(gold.price_mod) + (Number(gold.price_mod) * Number((data.nbp_gold_variants[2]/100)));
thisprice = thisprice.toFixed(2);
thisprice1 = thisprice1.toFixed(2);
thisprice2 = thisprice2.toFixed(2);
if (gold.assey == '999') {
var gold999 = thisprice;
var gold999_1 = thisprice1;
var gold999_2 = thisprice2;
}
if (gold.assey == '986') {
var gold986 = thisprice;
var gold986_1 = thisprice1;
var gold986_2 = thisprice2;
}
if (gold.assey == '916') {
var gold916 = thisprice;
var gold916_1 = thisprice1;
var gold916_2 = thisprice2;
}
if (gold.assey == '900') {
var gold900 = thisprice;
var gold900_1 = thisprice1;
var gold900_2 = thisprice2;
}
if (gold.assey == '750') {
var gold750 = thisprice;
var gold750_1 = thisprice1;
var gold750_2 = thisprice2;
}
if (gold.assey == '585') {
var gold585 = thisprice;
var gold585_1 = thisprice1;
var gold585_2 = thisprice2;
}
if (gold.assey == '375') {
var gold375 = thisprice;
var gold375_1 = thisprice1;
var gold375_2 = thisprice2;
}
if (gold.assey == '333') {
var gold333 = thisprice;
var gold333_1 = thisprice1;
var gold333_2 = thisprice2;
}
}
//POBRANIE WARIANTÓW CEN SREBRO
for (let i = 0; i < data.silverassey.length; i++) {
var silver = data.silverassey[i];
var thisprice2 = Number( silver.price_mod );
var thisprice1 = Number(silver.price_mod) + (Number(silver.price_mod) * Number((data.nbp_gold_variants[1]/100)));
var thisprice = Number(silver.price_mod) + (Number(silver.price_mod) * Number((data.nbp_gold_variants[2]/100)));
thisprice = thisprice.toFixed(2);
thisprice1 = thisprice1.toFixed(2);
thisprice2 = thisprice2.toFixed(2);
if (silver.assey == '999') {
var silver999 = thisprice;
var silver999_1 = thisprice1;
var silver999_2 = thisprice2;
}
if (silver.assey == '925') {
var silver925 = thisprice;
var silver925_1 = thisprice1;
var silver925_2 = thisprice2;
}
if (silver.assey == '830') {
var silver830 = thisprice;
var silver830_1 = thisprice1;
var silver830_2 = thisprice2;
}
if (silver.assey == '800') {
var silver800 = thisprice;
var silver800_1 = thisprice1;
var silver800_2 = thisprice2;
}
if (silver.assey == '750') {
var silver750 = thisprice;
var silver750_1 = thisprice1;
var silver750_2 = thisprice2;
}
if (silver.assey == '700') {
var silver700 = thisprice;
var silver700_1 = thisprice1;
var silver700_2 = thisprice2;
}
if (silver.assey == '625') {
var silver625 = thisprice;
var silver625_1 = thisprice1;
var silver625_2 = thisprice2;
}
if (silver.assey == '600') {
var silver600 = thisprice;
var silver600_1 = thisprice1;
var silver600_2 = thisprice2;
}
}
//POBRANIE WARIANTÓW CEN MONETY ZŁOTE
for (let i = 0; i < data.coins.length; i++) {
var coins = data.coins[i];
var thisprice2 = Number( coins.price_priv );
var thisprice1 = Number(coins.price_150less);
var thisprice = Number(coins.price_150more);
thisprice = thisprice.toFixed(2);
thisprice1 = thisprice1.toFixed(2);
thisprice2 = thisprice2.toFixed(2);
if (coins.name == 'Krugerrand 1 uncja') {
var krugerrandjednauncja = thisprice;
var krugerrandjednauncja_1 = thisprice1;
var krugerrandjednauncja_2 = thisprice2;
}
if (coins.name == 'Krugerrand 1/2 uncji') {
var krugerrandjednadrugauncji = thisprice;
var krugerrandjednadrugauncji_1 = thisprice1;
var krugerrandjednadrugauncji_2 = thisprice2;
}
if (coins.name == 'Krugerrand 1/4 uncji') {
var krugerrandjednaczwartauncji = thisprice;
var krugerrandjednaczwartauncji_1 = thisprice1;
var krugerrandjednaczwartauncji_2 = thisprice2;
}
if (coins.name == '10 Dolarów USA') {
var dziesiecdolarowusa = thisprice;
var dziesiecdolarowusa_1 = thisprice1;
var dziesiecdolarowusa_2 = thisprice2;
}
if (coins.name == '10 Rubli ( Rosja )') {
var dziesiecrublirosja = thisprice;
var dziesiecrublirosja_1 = thisprice1;
var dziesiecrublirosja_2 = thisprice2;
}
if (coins.name == '15 Rubli ( Rosja )') {
var pietnascierublirosja = thisprice;
var pietnascierublirosja_1 = thisprice1;
var pietnascierublirosja_2 = thisprice2;
}
if (coins.name == '20 Dolarów USA') {
var dwadziesciadolarowusa = thisprice;
var dwadziesciadolarowusa_1 = thisprice1;
var dwadziesciadolarowusa_2 = thisprice2;
}
if (coins.name == '5 Rubli ( Rosja )') {
var piecrublirosja = thisprice;
var piecrublirosja_1 = thisprice1;
var piecrublirosja_2 = thisprice2;
}
if (coins.name == 'Australijski Kangur 1 oz') {
var australijskikangurjedenoz = thisprice;
var australijskikangurjedenoz_1 = thisprice1;
var australijskikangurjedenoz_2 = thisprice2;
}
if (coins.name == 'Australijski Kangur 1\/2 oz') {
var australijskikangurjednadrugaoz = thisprice;
var australijskikangurjednadrugaoz_1 = thisprice1;
var australijskikangurjednadrugaoz_2 = thisprice2;
}
if (coins.name == 'Britannia 1 oz.') {
var britanniajedenoz = thisprice;
var britanniajedenoz_1 = thisprice1;
var britanniajedenoz_2 = thisprice2;
}
if (coins.name == 'Monety pr. 999 1 Uncja') {
var monetypr9991uncja = thisprice;
var monetypr9991uncja_1 = thisprice1;
var monetypr9991uncja_2 = thisprice2;
}
}
//POBRANIE WARIANTÓW CEN MONETY SREBRNE
for (let i = 0; i < data.silvercoins.length; i++) {
var silvercoins = data.silvercoins[i];
var thisprice2 = Number( silvercoins.price_priv );
var thisprice1 = Number(silvercoins.price_150less);
var thisprice = Number(silvercoins.price_150more);
thisprice = thisprice.toFixed(2);
thisprice1 = thisprice1.toFixed(2);
thisprice2 = thisprice2.toFixed(2);
if (silvercoins.name == 'Monety pr 999 1/2 Uncji') {
var monetysrebrnepr999jednadrugauncji = thisprice;
var monetysrebrnepr999jednadrugauncji_1 = thisprice1;
var monetysrebrnepr999jednadrugauncji_2 = thisprice2;
}
if (silvercoins.name == 'Monety pr. 999 1 Uncja') {
var monetysrebrnepr999jednauncja = thisprice;
var monetysrebrnepr999jednauncja_1 = thisprice1;
var monetysrebrnepr999jednauncja_2 = thisprice2;
}	
}
//POBRANIE WARIANTÓW CEN SZTABKI ZŁOTE
for (let i = 0; i < data.goldbars.length; i++) {
var goldbars = data.goldbars[i];
var thisprice2 = Number( goldbars.price_priv );
var thisprice1 = Number(goldbars.price_150less);
var thisprice = Number(goldbars.price_150more);
thisprice = thisprice.toFixed(2);
thisprice1 = thisprice1.toFixed(2);
thisprice2 = thisprice2.toFixed(2);
if (goldbars.name == 'LBMA 1g') {
var lbmajedeng = thisprice;
var lbmajedeng_1 = thisprice1;
var lbmajedeng_2 = thisprice2;
}
if (goldbars.name == ' LBMA 2g') {
var lbmadwag = thisprice;
var lbmadwag_1 = thisprice1;
var lbmadwag_2 = thisprice2;
}
if (goldbars.name == ' LBMA 10g') {
var lbmadziesiecg = thisprice;
var lbmadziesiecg_1 = thisprice1;
var lbmadziesiecg_2 = thisprice2;
}
if (goldbars.name == 'LBMA 5g') {
var lbmapiecg = thisprice;
var lbmapiecg_1 = thisprice1;
var lbmapiecg_2 = thisprice2;
}
if (goldbars.name == 'LBMA 20g') {
var lbmadwadziesciag = thisprice;
var lbmadwadziesciag_1 = thisprice1;
var lbmadwadziesciag_2 = thisprice2;
}
if (goldbars.name == ' LBMA 50g') {
var lbmapiecdziesiatg = thisprice;
var lbmapiecdziesiatg_1 = thisprice1;
var lbmapiecdziesiatg_2 = thisprice2;
}
if (goldbars.name == 'LBMA 100 g ') {
var lbmastog = thisprice;
var lbmastog_1 = thisprice1;
var lbmastog_2 = thisprice2;
}
if (goldbars.name == 'Sztabka 1 uncja') {
var sztabkajednauncja = thisprice;
var sztabkajednauncja_1 = thisprice1;
var sztabkajednauncja_2 = thisprice2;
}
if (goldbars.name == 'Sztabka 1/2 uncji') {
var sztabkajednadrugauncji = thisprice;
var sztabkajednadrugauncji_1 = thisprice1;
var sztabkajednadrugauncji_2 = thisprice2;
}
}
//POBRANIE WARIANTÓW CEN SZTABKI SREBRNE
for (let i = 0; i < data.silverbars.length; i++) {
var silverbars = data.silverbars[i];
var thisprice2 = Number( silverbars.price_priv );
var thisprice1 = Number(silverbars.price_150less);
var thisprice = Number(silverbars.price_150more);
thisprice = thisprice.toFixed(2);
thisprice1 = thisprice1.toFixed(2);
thisprice2 = thisprice2.toFixed(2);
if (silverbars.name == 'Sztabka 100g') {
var sztabkastog = thisprice;
var sztabkastog_1 = thisprice1;
var sztabkastog_2 = thisprice2;
}
if (silverbars.name == 'Sztabka 10g') {
var sztabkadziesiecg = thisprice;
var sztabkadziesiecg_1 = thisprice1;
var sztabkadziesiecg_2 = thisprice2;
}	
if (silverbars.name == 'Sztabka 30 g') {
var sztabkatrzydziescig = thisprice;
var sztabkatrzydziescig_1 = thisprice1;
var sztabkatrzydziescig_2 = thisprice2;
}	
if (silverbars.name == 'Sztabka 50g') {
var sztabkapiecdziesiatg = thisprice;
var sztabkapiecdziesiatg_1 = thisprice1;
var sztabkapiecdziesiatg_2 = thisprice2;
}	
}
$("#kruszec1-waga").on("change paste keyup", function() {
if ( $(this).val() > 300 ) {
$('#kruszec1-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999 + ' zł');
$('#kruszec1-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986 + ' zł');
$('#kruszec1-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916 + ' zł');
$('#kruszec1-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900 + ' zł');
$('#kruszec1-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750 + ' zł');
$('#kruszec1-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585 + ' zł');
$('#kruszec1-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375 + ' zł');
$('#kruszec1-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333 + ' zł');
$('#kruszec1-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999 + ' zł');
$('#kruszec1-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925 + ' zł');
$('#kruszec1-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830 + ' zł');
$('#kruszec1-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800 + ' zł');
$('#kruszec1-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750 + ' zł');
$('#kruszec1-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700 + ' zł');
$('#kruszec1-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625 + ' zł');
$('#kruszec1-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600 + ' zł');
$('#monety1-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja + ' zł');
$('#monety1-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji + ' zł');
$('#monety1-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji + ' zł');
$('#monety1-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa + ' zł');
$('#monety1-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja + ' zł');
$('#monety1-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja + ' zł');
$('#monety1-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa + ' zł');
$('#monety1-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja + ' zł');
$('#monety1-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz + ' zł');
$('#monety1-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz + ' zł');
$('#monety1-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz + ' zł');
$('#monety1-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja + ' zł');
$('#monety1-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji + ' zł');
$('#monety1-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja + ' zł');
$('#sztabki1-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng + ' zł');
$('#sztabki1-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag + ' zł');
$('#sztabki1-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg + ' zł');
$('#sztabki1-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg + ' zł');
$('#sztabki1-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag + ' zł');
$('#sztabki1-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg + ' zł');
$('#sztabki1-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog + ' zł');
$('#sztabki1-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja + ' zł');
$('#sztabki1-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji + ' zł');
$('#sztabki1-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog + ' zł');
$('#sztabki1-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg + ' zł');
$('#sztabki1-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig + ' zł');
$('#sztabki1-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg + ' zł');
} else if ( $(this).val() <= 300 && $(this).val() >= 100 ) {
$('#kruszec1-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999_1 + ' zł');
$('#kruszec1-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986_1 + ' zł');
$('#kruszec1-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916_1 + ' zł');
$('#kruszec1-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900_1 + ' zł');
$('#kruszec1-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750_1 + ' zł');
$('#kruszec1-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585_1 + ' zł');
$('#kruszec1-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375_1 + ' zł');
$('#kruszec1-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333_1 + ' zł');
$('#kruszec1-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999_1 + ' zł');
$('#kruszec1-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925_1 + ' zł');
$('#kruszec1-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830_1 + ' zł');
$('#kruszec1-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800_1 + ' zł');
$('#kruszec1-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750_1 + ' zł');
$('#kruszec1-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700_1 + ' zł');
$('#kruszec1-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625_1 + ' zł');
$('#kruszec1-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600_1 + ' zł');
$('#monety1-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja_1 + ' zł');
$('#monety1-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji_1 + ' zł');
$('#monety1-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji_1 + ' zł');
$('#monety1-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa_1 + ' zł');
$('#monety1-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja_1 + ' zł');
$('#monety1-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja_1 + ' zł');
$('#monety1-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa_1 + ' zł');
$('#monety1-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja_1 + ' zł');
$('#monety1-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz_1 + ' zł');
$('#monety1-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz_1 + ' zł');
$('#monety1-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz_1 + ' zł');
$('#monety1-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja_1 + ' zł');
$('#monety1-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji_1 + ' zł');
$('#monety1-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja_1 + ' zł');
$('#sztabki1-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng_1 + ' zł');
$('#sztabki1-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag_1 + ' zł');
$('#sztabki1-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg_1 + ' zł');
$('#sztabki1-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg_1 + ' zł');
$('#sztabki1-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag_1 + ' zł');
$('#sztabki1-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg_1 + ' zł');
$('#sztabki1-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog_1 + ' zł');
$('#sztabki1-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja_1 + ' zł');
$('#sztabki1-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji_1 + ' zł');
$('#sztabki1-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog_1 + ' zł');
$('#sztabki1-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg_1 + ' zł');
$('#sztabki1-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig_1 + ' zł');
$('#sztabki1-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg_1 + ' zł');
} else {
$('#kruszec1-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999_2 + ' zł');
$('#kruszec1-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986_2 + ' zł');
$('#kruszec1-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916_2 + ' zł');
$('#kruszec1-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900_2 + ' zł');
$('#kruszec1-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750_2 + ' zł');
$('#kruszec1-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585_2 + ' zł');
$('#kruszec1-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375_2 + ' zł');
$('#kruszec1-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333_2 + ' zł');
$('#kruszec1-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999_2 + ' zł');
$('#kruszec1-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925_2 + ' zł');
$('#kruszec1-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830_2 + ' zł');
$('#kruszec1-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800_2 + ' zł');
$('#kruszec1-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750_2 + ' zł');
$('#kruszec1-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700_2 + ' zł');
$('#kruszec1-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625_2 + ' zł');
$('#kruszec1-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600_2 + ' zł');
$('#monety1-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja_2 + ' zł');
$('#monety1-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji_2 + ' zł');
$('#monety1-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji_2 + ' zł');
$('#monety1-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa_2 + ' zł');
$('#monety1-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja_2 + ' zł');
$('#monety1-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja_2 + ' zł');
$('#monety1-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa_2 + ' zł');
$('#monety1-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja_2 + ' zł');
$('#monety1-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz_2 + ' zł');
$('#monety1-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz_2 + ' zł');
$('#monety1-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz_2 + ' zł');
$('#monety1-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja_2 + ' zł');
$('#monety1-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji_2 + ' zł');
$('#monety1-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja_2 + ' zł');
$('#sztabki1-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng_2 + ' zł');
$('#sztabki1-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag_2 + ' zł');
$('#sztabki1-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg_2 + ' zł');
$('#sztabki1-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg_2 + ' zł');
$('#sztabki1-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag_2 + ' zł');
$('#sztabki1-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg_2 + ' zł');
$('#sztabki1-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog_2 + ' zł');
$('#sztabki1-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja_2 + ' zł');
$('#sztabki1-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji_2 + ' zł');
$('#sztabki1-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog_2 + ' zł');
$('#sztabki1-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg_2 + ' zł');
$('#sztabki1-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig_2 + ' zł');
$('#sztabki1-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg_2 + ' zł');
}
if ( $('#kruszec1-rodzaj option:checked').val() === 'gold' ) {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#kruszec1-zloto option:checked').val() ) ) ).toFixed(2) );
} 
if ( $('#kruszec1-rodzaj option:checked').val() === 'silver' ) {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#kruszec1-srebro option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec1-rodzaj option:checked').val() === 'coins' ) {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#monety1-zlote option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec1-rodzaj option:checked').val() === 'silvercoins' ) {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#monety1-srebrne option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec1-rodzaj option:checked').val() === 'goldbars' ) {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#sztabki1-zlote option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec1-rodzaj option:checked').val() === 'silverbars' ) {
$('#wartosc1 span').text( ( Number( $('#kruszec1-waga').val() ) * ( Number( $('#sztabki1-srebrne option:checked').val() ) ) ).toFixed(2) );
}
podsumowanie();
});
$("#kruszec2-waga").on("change paste keyup", function() {
if ( $(this).val() > 300 ) {
$('#kruszec2-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999 + ' zł');
$('#kruszec2-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986 + ' zł');
$('#kruszec2-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916 + ' zł');
$('#kruszec2-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900 + ' zł');
$('#kruszec2-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750 + ' zł');
$('#kruszec2-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585 + ' zł');
$('#kruszec2-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375 + ' zł');
$('#kruszec2-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333 + ' zł');
$('#kruszec2-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999 + ' zł');
$('#kruszec2-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925 + ' zł');
$('#kruszec2-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830 + ' zł');
$('#kruszec2-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800 + ' zł');
$('#kruszec2-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750 + ' zł');
$('#kruszec2-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700 + ' zł');
$('#kruszec2-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625 + ' zł');
$('#kruszec2-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600 + ' zł');
$('#monety2-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja + ' zł');
$('#monety2-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji + ' zł');
$('#monety2-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji + ' zł');
$('#monety2-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa + ' zł');
$('#monety2-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja + ' zł');
$('#monety2-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja + ' zł');
$('#monety2-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa + ' zł');
$('#monety2-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja + ' zł');
$('#monety2-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz + ' zł');
$('#monety2-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz + ' zł');
$('#monety2-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz + ' zł');
$('#monety2-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja + ' zł');
$('#monety2-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji + ' zł');
$('#monety2-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja + ' zł');
$('#sztabki2-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng + ' zł');
$('#sztabki2-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag + ' zł');
$('#sztabki2-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg + ' zł');
$('#sztabki2-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg + ' zł');
$('#sztabki2-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag + ' zł');
$('#sztabki2-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg + ' zł');
$('#sztabki2-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog + ' zł');
$('#sztabki2-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja + ' zł');
$('#sztabki2-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji + ' zł');
$('#sztabki2-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog + ' zł');
$('#sztabki2-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg + ' zł');
$('#sztabki2-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig + ' zł');
$('#sztabki2-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg + ' zł');
} else if ( $(this).val() <= 300 && $(this).val() >= 100 ) {
$('#kruszec2-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999_1 + ' zł');
$('#kruszec2-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986_1 + ' zł');
$('#kruszec2-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916_1 + ' zł');
$('#kruszec2-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900_1 + ' zł');
$('#kruszec2-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750_1 + ' zł');
$('#kruszec2-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585_1 + ' zł');
$('#kruszec2-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375_1 + ' zł');
$('#kruszec2-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333_1 + ' zł');
$('#kruszec2-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999_1 + ' zł');
$('#kruszec2-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925_1 + ' zł');
$('#kruszec2-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830_1 + ' zł');
$('#kruszec2-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800_1 + ' zł');
$('#kruszec2-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750_1 + ' zł');
$('#kruszec2-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700_1 + ' zł');
$('#kruszec2-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625_1 + ' zł');
$('#kruszec2-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600_1 + ' zł');
$('#monety2-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja_1) + ' zł';
$('#monety2-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji_1 + ' zł');
$('#monety2-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji_1 + ' zł');
$('#monety2-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa_1 + ' zł');
$('#monety2-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja_1 + ' zł');
$('#monety2-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja_1 + ' zł');
$('#monety2-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa_1 + ' zł');
$('#monety2-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja_1 + ' zł');
$('#monety2-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz_1 + ' zł');
$('#monety2-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz_1 + ' zł');
$('#monety2-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz_1 + ' zł');
$('#monety2-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja_1 + ' zł');
$('#monety2-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji_1 + ' zł');
$('#monety2-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja_1 + ' zł');
$('#sztabki2-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng_1 + ' zł');
$('#sztabki2-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag_1 + ' zł');
$('#sztabki2-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg_1 + ' zł');
$('#sztabki2-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg_1 + ' zł');
$('#sztabki2-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag_1 + ' zł');
$('#sztabki2-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg_1 + ' zł');
$('#sztabki2-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog_1 + ' zł');
$('#sztabki2-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja_1 + ' zł');
$('#sztabki2-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji_1 + ' zł');
$('#sztabki2-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog_1 + ' zł');
$('#sztabki2-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg_1 + ' zł');
$('#sztabki2-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig_1 + ' zł');
$('#sztabki2-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg_1 + ' zł');
} else {
$('#kruszec2-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999_2 + ' zł');
$('#kruszec2-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986_2 + ' zł');
$('#kruszec2-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916_2 + ' zł');
$('#kruszec2-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900_2 + ' zł');
$('#kruszec2-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750_2 + ' zł');
$('#kruszec2-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585_2 + ' zł');
$('#kruszec2-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375_2 + ' zł');
$('#kruszec2-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333_2 + ' zł');
$('#kruszec2-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999_2 + ' zł');
$('#kruszec2-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925_2 + ' zł');
$('#kruszec2-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830_2 + ' zł');
$('#kruszec2-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800_2 + ' zł');
$('#kruszec2-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750_2 + ' zł');
$('#kruszec2-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700_2 + ' zł');
$('#kruszec2-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625_2 + ' zł');
$('#kruszec2-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600_2 + ' zł');
$('#monety2-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja_2 + ' zł');
$('#monety2-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji_2 + ' zł');
$('#monety2-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji_2 + ' zł');
$('#monety2-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa_2 + ' zł');
$('#monety2-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja_2 + ' zł');
$('#monety2-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja_2 + ' zł');
$('#monety2-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa_2 + ' zł');
$('#monety2-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja_2 + ' zł');
$('#monety2-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz_2 + ' zł');
$('#monety2-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz_2 + ' zł');
$('#monety2-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz_2 + ' zł');
$('#monety2-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja_2 + ' zł');
$('#monety2-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji_2 + ' zł');
$('#monety2-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja_2 + ' zł');
$('#sztabki2-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng_2 + ' zł');
$('#sztabki2-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag_2 + ' zł');
$('#sztabki2-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg_2 + ' zł');
$('#sztabki2-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg_2 + ' zł');
$('#sztabki2-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag_2 + ' zł');
$('#sztabki2-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg_2 + ' zł');
$('#sztabki2-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog_2 + ' zł');
$('#sztabki2-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja_2 + ' zł');
$('#sztabki2-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji_2 + ' zł');
$('#sztabki2-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog_2 + ' zł');
$('#sztabki2-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg_2 + ' zł');
$('#sztabki2-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig_2 + ' zł');
$('#sztabki2-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg_2 + ' zł');
}
if ( $('#kruszec2-rodzaj option:checked').val() === 'gold' ) {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#kruszec2-zloto option:checked').val() ) ) ).toFixed(2) );
} 
if ( $('#kruszec2-rodzaj option:checked').val() === 'silver' ) {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#kruszec2-srebro option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec2-rodzaj option:checked').val() === 'coins' ) {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#monety2-zlote option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec2-rodzaj option:checked').val() === 'silvercoins' ) {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#monety2-srebrne option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec2-rodzaj option:checked').val() === 'goldbars' ) {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#sztabki2-zlote option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec2-rodzaj option:checked').val() === 'silverbars' ) {
$('#wartosc2 span').text( ( Number( $('#kruszec2-waga').val() ) * ( Number( $('#sztabki2-srebrne option:checked').val() ) ) ).toFixed(2) );
}
podsumowanie();
});
$("#kruszec3-waga").on("change paste keyup", function() {
if ( $(this).val() > 300 ) {
$('#kruszec3-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999 + ' zł');
$('#kruszec3-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986 + ' zł');
$('#kruszec3-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916 + ' zł');
$('#kruszec3-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900 + ' zł');
$('#kruszec3-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750 + ' zł');
$('#kruszec3-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585 + ' zł');
$('#kruszec3-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375 + ' zł');
$('#kruszec3-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333 + ' zł');
$('#kruszec3-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999 + ' zł');
$('#kruszec3-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925 + ' zł');
$('#kruszec3-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830 + ' zł');
$('#kruszec3-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800 + ' zł');
$('#kruszec3-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750 + ' zł');
$('#kruszec3-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700 + ' zł');
$('#kruszec3-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625 + ' zł');
$('#kruszec3-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600 + ' zł');
$('#monety3-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja + ' zł');
$('#monety3-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji + ' zł');
$('#monety3-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji + ' zł');
$('#monety3-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa + ' zł');
$('#monety3-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja + ' zł');
$('#monety3-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja + ' zł');
$('#monety3-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa + ' zł');
$('#monety3-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja + ' zł');
$('#monety3-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz + ' zł');
$('#monety3-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz + ' zł');
$('#monety3-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz + ' zł');
$('#monety3-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja + ' zł');
$('#monety3-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji + ' zł');
$('#monety3-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja + ' zł');
$('#sztabki3-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng + ' zł');
$('#sztabki3-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag + ' zł');
$('#sztabki3-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg + ' zł');
$('#sztabki3-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg + ' zł');
$('#sztabki3-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag + ' zł');
$('#sztabki3-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg + ' zł');
$('#sztabki3-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog + ' zł');
$('#sztabki3-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja + ' zł');
$('#sztabki3-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji + ' zł');
$('#sztabki3-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog + ' zł');
$('#sztabki3-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg + ' zł');
$('#sztabki3-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig + ' zł');
$('#sztabki3-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg + ' zł');
} else if ( $(this).val() <= 300 && $(this).val() >= 100 ) {
$('#kruszec3-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999_1 + ' zł');
$('#kruszec3-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986_1 + ' zł');
$('#kruszec3-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916_1 + ' zł');
$('#kruszec3-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900_1 + ' zł');
$('#kruszec3-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750_1 + ' zł');
$('#kruszec3-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585_1 + ' zł');
$('#kruszec3-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375_1 + ' zł');
$('#kruszec3-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333_1 + ' zł');
$('#kruszec3-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625_1 + ' zł' + ' zł');
$('#kruszec3-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600_1 + ' zł' + ' zł');
$('#monety3-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja_1 + ' zł');
$('#monety3-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji_1 + ' zł');
$('#monety3-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji_1 + ' zł');
$('#monety3-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa_1 + ' zł');
$('#monety3-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja_1 + ' zł');
$('#monety3-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja_1 + ' zł');
$('#monety3-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa_1 + ' zł');
$('#monety3-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja_1 + ' zł');
$('#monety3-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz_1 + ' zł');
$('#monety3-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz_1 + ' zł');
$('#monety3-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz_1 + ' zł');
$('#monety3-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja_1 + ' zł');
$('#monety3-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji_1 + ' zł');
$('#monety3-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja_1 + ' zł');
$('#sztabki3-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng_1 + ' zł');
$('#sztabki3-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag_1 + ' zł');
$('#sztabki3-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg_1 + ' zł');
$('#sztabki3-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg_1 + ' zł');
$('#sztabki3-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag_1 + ' zł');
$('#sztabki3-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg_1 + ' zł');
$('#sztabki3-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog_1 + ' zł');
$('#sztabki3-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja_1 + ' zł');
$('#sztabki3-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji_1 + ' zł');
$('#sztabki3-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog_1 + ' zł');
$('#sztabki3-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg_1 + ' zł');
$('#sztabki3-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig_1 + ' zł');
$('#sztabki3-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg_1 + ' zł');
} else {
$('#kruszec3-zloto option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + gold999_2 + ' zł');
$('#kruszec3-zloto option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + gold986_2 + ' zł');
$('#kruszec3-zloto option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + gold916_2 + ' zł');
$('#kruszec3-zloto option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + gold900_2 + ' zł');
$('#kruszec3-zloto option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + gold750_2 + ' zł');
$('#kruszec3-zloto option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + gold585_2 + ' zł');
$('#kruszec3-zloto option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + gold375_2 + ' zł');
$('#kruszec3-zloto option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + gold333_2 + ' zł');
$('#kruszec3-srebro option:eq(0)').text('Próba 999 - aktualna cena za 1 gram: ' + silver999_2 + ' zł');
$('#kruszec3-srebro option:eq(1)').text('Próba 986 - aktualna cena za 1 gram: ' + silver925_2 + ' zł');
$('#kruszec3-srebro option:eq(2)').text('Próba 916 - aktualna cena za 1 gram: ' + silver830_2 + ' zł');
$('#kruszec3-srebro option:eq(3)').text('Próba 900 - aktualna cena za 1 gram: ' + silver800_2 + ' zł');
$('#kruszec3-srebro option:eq(4)').text('Próba 750 - aktualna cena za 1 gram: ' + silver750_2 + ' zł');
$('#kruszec3-srebro option:eq(5)').text('Próba 585 - aktualna cena za 1 gram: ' + silver700_2 + ' zł');
$('#kruszec3-srebro option:eq(6)').text('Próba 375 - aktualna cena za 1 gram: ' + silver625_2 + ' zł');
$('#kruszec3-srebro option:eq(7)').text('Próba 333 - aktualna cena za 1 gram: ' + silver600_2 + ' zł');
$('#monety3-zlote option:eq(0)').text('Krugerrand 1 uncja: ' + krugerrandjednauncja_2 + ' zł');
$('#monety3-zlote option:eq(1)').text('Krugerrand 1/2 uncji: ' + krugerrandjednadrugauncji_2 + ' zł');
$('#monety3-zlote option:eq(2)').text('Krugerrand 1\/4 uncji: ' + krugerrandjednaczwartauncji_2 + ' zł');
$('#monety3-zlote option:eq(3)').text('10 Dolarów USA: ' + dziesiecdolarowusa_2 + ' zł');
$('#monety3-zlote option:eq(4)').text('10 Rubli ( Rosja ): ' + dziesiecrublirosja_2 + ' zł');
$('#monety3-zlote option:eq(5)').text('15 Rubli ( Rosja ): ' + pietnascierublirosja_2 + ' zł');
$('#monety3-zlote option:eq(6)').text('20 Dolarów USA: ' + dwadziesciadolarowusa_2 + ' zł');
$('#monety3-zlote option:eq(7)').text('5 Rubli ( Rosja ): ' + piecrublirosja_2 + ' zł');
$('#monety3-zlote option:eq(8)').text('Australijski Kangur 1 oz: ' + australijskikangurjedenoz_2 + ' zł');
$('#monety3-zlote option:eq(9)').text('Australijski Kangur 1/2 oz: ' + australijskikangurjednadrugaoz_2 + ' zł');
$('#monety3-zlote option:eq(10)').text('Britannia 1 oz.: ' + britanniajedenoz_2 + ' zł');
$('#monety3-zlote option:eq(10)').text('Monety pr. 999 1 Uncja.: ' + monetypr9991uncja_2 + ' zł');
$('#monety3-srebrne option:eq(0)').text('Monety pr 999 1/2 Uncji: ' + monetysrebrnepr999jednadrugauncji_2 + ' zł');
$('#monety3-srebrne option:eq(1)').text('Monety pr. 999 1 Uncja: ' + monetysrebrnepr999jednauncja_2 + ' zł');
$('#sztabki3-zlote option:eq(0)').text('LBMA 1g: ' + lbmajedeng_2 + ' zł');
$('#sztabki3-zlote option:eq(1)').text(' LBMA 2g: ' + lbmadwag_2 + ' zł');
$('#sztabki3-zlote option:eq(2)').text(' LBMA 10g: ' + lbmadziesiecg_2 + ' zł');
$('#sztabki3-zlote option:eq(3)').text('LBMA 5g: ' + lbmapiecg_2 + ' zł');
$('#sztabki3-zlote option:eq(4)').text('LBMA 20g: ' + lbmadwadziesciag_2 + ' zł');
$('#sztabki3-zlote option:eq(5)').text(' LBMA 50g: ' + lbmapiecdziesiatg_2 + ' zł');
$('#sztabki3-zlote option:eq(6)').text('LBMA 100 g: ' + lbmastog_2 + ' zł');
$('#sztabki3-zlote option:eq(7)').text('Sztabka 1 uncja: ' + sztabkajednauncja_2 + ' zł');
$('#sztabki3-zlote option:eq(8)').text('Sztabka 1/2 uncji: ' + sztabkajednadrugauncji_2 + ' zł');
$('#sztabki3-srebrne option:eq(0)').text('Sztabka 100g: ' + sztabkastog_2 + ' zł');
$('#sztabki3-srebrne option:eq(1)').text('Sztabka 10g: ' + sztabkadziesiecg_2 + ' zł');
$('#sztabki3-srebrne option:eq(2)').text('Sztabka 30 g: ' + sztabkatrzydziescig_2 + ' zł');
$('#sztabki3-srebrne option:eq(3)').text('Sztabka 50g: ' + sztabkapiecdziesiatg_2 + ' zł');
}
if ( $('#kruszec3-rodzaj option:checked').val() === 'gold' ) {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#kruszec3-zloto option:checked').val() ) ) ).toFixed(2) );
} 
if ( $('#kruszec3-rodzaj option:checked').val() === 'silver' ) {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#kruszec3-srebro option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec3-rodzaj option:checked').val() === 'coins' ) {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#monety3-zlote option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec3-rodzaj option:checked').val() === 'silvercoins' ) {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#monety3-srebrne option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec3-rodzaj option:checked').val() === 'goldbars' ) {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#sztabki3-zlote option:checked').val() ) ) ).toFixed(2) );
}
if ( $('#kruszec3-rodzaj option:checked').val() === 'silverbars' ) {
$('#wartosc3 span').text( ( Number( $('#kruszec3-waga').val() ) * ( Number( $('#sztabki3-srebrne option:checked').val() ) ) ).toFixed(2) );
}
podsumowanie();
});
}
});
$(document).on('submit','#form', function(event) {
$('#podsumowanie-input').val( $('#podsumowanie span').text() );
if ( $('#kruszec2-stan').attr('data-stan') === "1" ) {
$('#data-stan2').val('1');
}
if ( $('#kruszec3-stan').attr('data-stan') === "1" ) {
$('#data-stan3').val('1');
}
if ( $('#kruszec1-rodzaj option:checked').val() === "gold" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec1-hidden-gold" name="kruszec1-hidden-gold" value="' + $( '#kruszec1-zloto option:checked' ).text() + '">' );
}			
if ( $('#kruszec1-rodzaj option:checked').val() === "silver" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec1-hidden-silver" name="kruszec1-hidden-silver" value="' + $( '#kruszec1-srebro option:checked' ).text() + '">' );
}			
if ( $('#kruszec1-rodzaj option:checked').val() === "coins" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec1-hidden-coins" name="kruszec1-hidden-coins" value="' + $( '#monety1-zlote option:checked' ).text() + '">' );
}			
if ( $('#kruszec1-rodzaj option:checked').val() === "silvercoins" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec1-hidden-silvercoins" name="kruszec1-hidden-silvercoins" value="' + $( '#monety2-srebrne option:checked' ).text() + '">' );
}			
if ( $('#kruszec1-rodzaj option:checked').val() === "goldbars" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec1-hidden-goldbars" name="kruszec1-hidden-goldbars" value="' + $( '#monety1-zlote option:checked' ).text() + '">' );
}			
if ( $('#kruszec1-rodzaj option:checked').val() === "silverbars" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec1-hidden-silverbars" name="kruszec1-hidden-silverbars" value="' + $( '#monety1-srebrne option:checked' ).text() + '">' );
}
if ( $('#kruszec2-rodzaj option:checked').val() === "gold" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec2-hidden-gold" name="kruszec2-hidden-gold" value="' + $( '#kruszec2-zloto option:checked' ).text() + '">' );
}			
if ( $('#kruszec2-rodzaj option:checked').val() === "silver" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec2-hidden-silver" name="kruszec2-hidden-silver" value="' + $( '#kruszec2-srebro option:checked' ).text() + '">' );
}			
if ( $('#kruszec2-rodzaj option:checked').val() === "coins" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec2-hidden-coins" name="kruszec2-hidden-coins" value="' + $( '#monety2-zlote option:checked' ).text() + '">' );
}			
if ( $('#kruszec2-rodzaj option:checked').val() === "silvercoins" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec2-hidden-silvercoins" name="kruszec2-hidden-silvercoins" value="' + $( '#monety2-srebrne option:checked' ).text() + '">' );
}			
if ( $('#kruszec2-rodzaj option:checked').val() === "goldbars" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec2-hidden-goldbars" name="kruszec2-hidden-goldbars" value="' + $( '#monety2-zlote option:checked' ).text() + '">' );
}			
if ( $('#kruszec2-rodzaj option:checked').val() === "silverbars" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec2-hidden-silverbars" name="kruszec2-hidden-silverbars" value="' + $( '#monety2-srebrne option:checked' ).text() + '">' );
}
if ( $('#kruszec3-rodzaj option:checked').val() === "gold" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec3-hidden-gold" name="kruszec3-hidden-gold" value="' + $( '#kruszec3-zloto option:checked' ).text() + '">' );
}			
if ( $('#kruszec3-rodzaj option:checked').val() === "silver" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec3-hidden-silver" name="kruszec3-hidden-silver" value="' + $( '#kruszec3-srebro option:checked' ).text() + '">' );
}			
if ( $('#kruszec3-rodzaj option:checked').val() === "coins" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec3-hidden-coins" name="kruszec3-hidden-coins" value="' + $( '#monety3-zlote option:checked' ).text() + '">' );
}			
if ( $('#kruszec3-rodzaj option:checked').val() === "silvercoins" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec3-hidden-silvercoins" name="kruszec3-hidden-silvercoins" value="' + $( '#monety3-srebrne option:checked' ).text() + '">' );
}			
if ( $('#kruszec3-rodzaj option:checked').val() === "goldbars" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec3-hidden-goldbars" name="kruszec3-hidden-goldbars" value="' + $( '#monety3-zlote option:checked' ).text() + '">' );
}			
if ( $('#kruszec3-rodzaj option:checked').val() === "silverbars" ) {
$('#hiddens').append( '<input type="hidden" id="kruszec3-hidden-silverbars" name="kruszec3-hidden-silverbars" value="' + $( '#monety3-srebrne option:checked' ).text() + '">' );
}
});
});
