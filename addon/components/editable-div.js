import Component from '@ember/component';
import layout from '../templates/components/editable-div';

export default Component.extend({
  layout,
  attributeBindings: ['contenteditable'],
  contenteditable: true,
  placeholder: '',
  text: '',

  keyDown(event) {
    console.log('in keyDown');
  },

  keyUp() {
    console.log('in keyUp');
  }
});
