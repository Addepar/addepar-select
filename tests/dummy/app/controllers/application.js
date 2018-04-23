import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  options = ['Paris', 'London', 'Tokyo'];

  actions = {
    onSelectChanged(option) {
      console.log('The user selected', option);
    }
  };
}
