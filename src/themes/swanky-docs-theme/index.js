if (__DEV__) {
  module.hot.accept();
}

// Pixel Art
import pixels from './js/pixels';

// Syntax highlighting
import 'prismjs';

// Line numbers
import 'prismjs/plugins/line-numbers/prism-line-numbers';

// Base theme
import './css/index.styl';


(() => {
  pixels();
})();
