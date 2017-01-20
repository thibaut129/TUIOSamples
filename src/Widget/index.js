/**
 * @author Christian Brel <ch.brel@gmail.com>
 * @author Vincent Forquet
 * @author Nicolas Forget
 */

// Import ImageWidget
import ImageWidget from './src/ImageWidget';

const imgNode = document.createElement('img');
imgNode.src = 'assets/IMG_20150304_201145.jpg';
imgNode.style.width = '500px';
imgNode.style.height = '666px';
imgNode.style.position = 'absolute';
imgNode.ondragstart = () => (false);

document.body.appendChild(imgNode);

const imageWidget = new ImageWidget(imgNode, 0, 0, 500, 666);
