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
  $('#app').append('<button id="fruits"> Fruits and vegetables (using ImageElementWidget) </button></br>');
  $('#app').append('<button id="puzzle"> Puzzle (using ImageElementWidget) </button></br>');


  $('#development').on('click', () => {
    buildDevelopment();
  });
  $('#fruits').on('click', () => {
    console.log('fruits clicked');
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
