$(document).ready(function () {
    $('#fullpage').fullpage({
      navigation: true,
      fadingEffect: true,
      responsive: true,
      resize: true,
      menu: '#menu',
		  anchors: ['education', 'consulting', 'managementsparring', 'coaching','employees', 'stories'],
    });
  });