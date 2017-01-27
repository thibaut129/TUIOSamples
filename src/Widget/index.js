/**
 * @author Christian Brel <ch.brel@gmail.com>
 * @author Vincent Forquet
 * @author Nicolas Forget
 */

// Import JQuery
import $ from 'jquery/dist/jquery.min';

// Import TUIOManager
import TUIOManager from 'tuiomanager/core/TUIOManager';

// Import ImageWidget
import ImageWidget from './src/ImageWidget';

/** TUIOManager starter **/
const tuioManager = new TUIOManager();
tuioManager.start();

/** App Code **/

const buildApp = () => {
  const imageWidget = new ImageWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
  $('#app').append(imageWidget.domElem);
};

$(window).ready(() => {
  buildApp();
});
