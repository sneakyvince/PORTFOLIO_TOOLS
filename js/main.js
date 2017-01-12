//Fullpage customization
window.onresize = setEqualHeight;
$(document).ready(function() {
    $('#fullpage').fullpage({
        css3: true,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['1', '2', '3'],
        fadingEffect: true,
        fadingEffectKey: 'aTMxNTA0MS5pcmlzLmZoaWN0Lm5sXzRoalptRmthVzVuUldabVpXTjByMEM=',
        continuousVertical: true,
        afterRender: function () {
        slideTimeout = setInterval(function () {
             $.fn.fullpage.moveSectionDown();
            }, 100000000000);
        }
    });
});