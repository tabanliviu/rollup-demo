import {Component} from './component.decorator';

@Component
export class Services {
  pluck(o, ...names) {
    return names.map(n => o[n]);
  }
  
  doIt(cb, ...args) {
    console.log('doIt', cb(Math.random(), Math.random()), ...args);
  }
}

Services.INSTANCE = new Services();
