import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';
import layout from '../../templates/components/adde-select/trigger';

export default class AddeSelectTriggerComponent extends Component {
  layout = layout;
  // TODO is this class necessary for styling?
  classNames = ['adde-select-trigger'];

  /**
   * Text to display in the trigger of the component while no option is selected
   */
  @argument
  @type(optional('string'))
  placeholder;
}
