// Add any javascript here
if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
  var args = [
    '\n %c ✰ Swanky Docs ✰ %c http://swanky-docs.org %c \n\n',
    'background: #FF5A60; color: #ffffff; padding:5px 0;',
    'background: #9FCDDC; color: #ffffff; padding:5px 0;',
    'background: #42434F; color: #ffffff; padding: 5px 0;'
  ];

  console.log.apply(console, args); //jshint ignore:line
}
