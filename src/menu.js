/**
 * @author Kevin Duglué
 * @author Rémy Kaloustian
 */

// Import JQuery
import $ from 'jquery/dist/jquery.min';
// Import ImageWidget
import ImageElementWidget from 'tuiomanager/widgets/ElementWidget/ImageElementWidget/ImageElementWidget';
import VideoElementWidget from 'tuiomanager/widgets/ElementWidget/VideoElementWidget/VideoElementWidget';

export function buildMenu() {
  $('#app').append('<button id="development"> Development </button> </br>');
  $('#app').append('<button id="health"> Health (using ImageElementWidget) </button></br>');
  $('#app').append('<button id="puzzle"> Puzzle (using ImageElementWidget) </button></br>');


  $('#development').on('click', () => {
    buildDevelopment();
  });
  $('#health').on('click', () => {
    buildHealth();
  });
  $('#puzzle').on('click', () => {
    console.log('puzzle clicked');
  });
}// buildMenu()

function buildDevelopment() {
  $('#app').empty();

  const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
  const videoWidget = new VideoElementWidget(100, 100, 250, 333, 'http://techslides.com/demos/sample-videos/small.mp4');
  $('#app').append(imageWidget.domElem);
  $('#app').append(videoWidget.domElem);
}// buildDevelopment()

 function buildHealth() {
   $('#app').empty();

   $('#app').append('<div id="healthy-container">  <h1>Healthy</h1>  </div>');
   $('#app').append('<div id="unhealthy-container">  <h1>Unhealthy</h1>  </div>');

   const appleImage = new ImageElementWidget(50, 400, 150, 150, 'assets/example-health/apple.jpg');
   $('#app').append(appleImage.domElem);
   const bananaImage = new ImageElementWidget(250, 400, 150, 150, 'assets/example-health/banana.jpg');
   $('#app').append(bananaImage.domElem);
   const broccoliImage = new ImageElementWidget(450, 400, 150, 150, 'assets/example-health/broccoli.jpg');
   $('#app').append(broccoliImage.domElem);
   const tomatoImage = new ImageElementWidget(650, 400, 150, 150, 'assets/example-health/tomato.jpg');
   $('#app').append(tomatoImage.domElem);
   /*const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
   const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
   const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
   const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
   const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');
   const imageWidget = new ImageElementWidget(0, 0, 250, 333, 'assets/IMG_20150304_201145.jpg');*/


 }// buildHealth()
