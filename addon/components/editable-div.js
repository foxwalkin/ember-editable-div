import Component from '@ember/component';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';
import layout from '../templates/components/editable-div';

export default Component.extend({
  layout,
  classNames: ['editable-div'],
  attributeBindings: ['contenteditable', 'dataText:data-text'],
  contenteditable: true,
  dataText: computed('placeholder', function() {
    return this.get('placeholder');
  }),
  placeholder: '',
  value: '',

  keyDown(event) {
    this._setText();
  },

  keyUp() {
    this._setText();
  },

  _setText() {
    let text = document.getElementById(this.get('elementId')).innerHTML;
    this.set('value', text);
  }
});
