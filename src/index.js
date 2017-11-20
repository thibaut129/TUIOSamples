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
import ImageElementWidget from './ElementWidget/ImageElementWidget/ImageElementWidget';
import ImageWidget from './ImageWidget/ImageWidget';

/** TUIOManager starter **/
const tuioManager = new TUIOManager();
tuioManager.start();

/** App Code **/

const buildApp = () => {
  const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
  console.log("imageWidget.domElem = " + imageWidget.domElem);

  $('#app').append(imageWidget.domElem);
};

$(window).ready(() => {
  buildApp();
});
