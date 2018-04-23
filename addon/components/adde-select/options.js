import Component from '@ember/component';
import { action } from '@ember-decorators/object';
import layout from '../../templates/components/adde-select/options';

export default class OptionsComponent extends Component {
  layout = layout;

  @action
  onSelect(option) {
    this.sendAction('onSelect', option);
  }
}
