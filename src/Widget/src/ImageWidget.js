/**
 * @author Christian Brel <ch.brel@gmail.com>
 * @author Vincent Forquet
 * @author Nicolas Forget
 */

import TUIOWidget from 'tuiomanager/src/TUIOWidget';

/**
 * Main class to manage ImageWidget.
 *
 * @class ImageWidget
 * @extends TUIOWidget
 */
class ImageWidget extends TUIOWidget {
  /**
   * ImageWidget constructor.
   *
   * @constructor
   * @param {any} domElem - ImageWidget's domElem.
   * @param {number} x - ImageWidget's upperleft coin abscissa.
   * @param {number} y - ImageWidget's upperleft coin ordinate.
   * @param {number} width - ImageWidget's width.
   * @param {number} height - ImageWidget's height.
   */
  constructor(domElem, x, y, width, height) {
    super(domElem, x, y, width, height);
    console.log('ImageWidget');
  }

}

export default ImageWidget;
