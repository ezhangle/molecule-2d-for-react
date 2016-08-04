import Backbone from 'backbone';
import { Nbmolviz2dModel, Nbmolviz2dView } from '../../src/main.js';

Backbone.sync = () => {};

const model = new Nbmolviz2dModel();
const view = new Nbmolviz2dView({
  model,
  el: document.querySelector('.app'),
});

view.render();
