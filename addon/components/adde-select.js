import Component from '@ember/component';
import { argument } from '@ember-decorators/argument';
import { type, optional } from '@ember-decorators/argument/type';
import { required } from '@ember-decorators/argument/validation';
import layout from '../templates/components/adde-select';


export default class AddeSelectComponent extends Component {
  layout = layout;

  /**
   * Collection of options to display in the component
   */
  @required
  @argument
  options;

  /**
   * Text to display in the trigger of the component while no option is selected
   */
  @argument
  @type(optional('string'))
  placeholder;

  /**
   * Enable/disable the search box
   */
  @argument
  @type('boolean')
  searchEnabled = true;

  /**
   * Text to display in the search of the component while nothing is there
   */
  @argument
  @type(optional('string'))
  searchPlaceholder;

  /**
   * The component to render instead of the default one inside the trigger
   */
  @argument
  @type('string')
  triggerComponent = 'adde-select/trigger';
}
