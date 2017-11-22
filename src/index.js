/**
 * @author Christian Brel <ch.brel@gmail.com>
 * @author Vincent Forquet
 * @author Nicolas Forget
 */

// Import JQuery
import $ from 'jquery/dist/jquery.min';

// Import TUIOManager
import TUIOManager from 'tuiomanager/core/TUIOManager';

import {buildMenu} from './menu';


// Import ImageWidget
import ImageElementWidget from 'tuiomanager/widgets/ElementWidget/ImageElementWidget/ImageElementWidget';
import VideoElementWidget from 'tuiomanager/widgets/ElementWidget/VideoElementWidget/VideoElementWidget';

/** TUIOManager starter **/
const tuioManager = new TUIOManager();
tuioManager.start();

/** App Code **/

const buildApp = () => {
  /*const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
  const videoWidget = new VideoElementWidget(100, 100, 250, 333, 'http://techslides.com/demos/sample-videos/small.mp4');
  $('#app').append(imageWidget.domElem);
  $('#app').append(videoWidget.domElem);*/

  $('#app').append('<h1> TUIO Showcase </h1>');
  buildMenu();



};



$(window).ready(() => {
  buildApp();
});
