import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  options = ['Paris', 'London', 'Tokyo'];

  actions = {
    onSelectChanged(option) {
      // eslint-disable-next-line
      console.log('The user selected', option);
    }
  };
}
