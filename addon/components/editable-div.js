import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class EditableDiv extends Component {
  @tracked _value;

  get value() {
    return this._value || this.args.value;
  }

  @action setText(event) {
    const text = event.target.value;

    this._value = text;
  }
}
