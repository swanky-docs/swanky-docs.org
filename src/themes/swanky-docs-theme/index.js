import smoothScroll from './js/smooth-scroll';

// Base theme
import './css/index.styl';

(() => {
  console.log('YO')
  smoothScroll.init({
    selector: '[data-scroll]', // Selector for links (must be a valid CSS selector)
    speed: 500, // Integer. How fast to complete the scroll in milliseconds
    easing: 'easeInOutCubic', // Easing pattern to use
    offset: 100, // Integer. How far to offset the scrolling anchor location in pixels
    updateURL: true, // Boolean. If true, update the URL hash on scroll
  });
})();