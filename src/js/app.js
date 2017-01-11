import {config} from './config/config';
import {Component} from './component.decorator';
import {Services} from './services';

const version = '1.0.0';

@Component
class JsApp {
  constructor(params) {
    this.version = params.version;
    this.name = params.name;
    this.config = params.config;
    this.services = Services.INSTANCE;
    
    let {baseUrl, ...rest} = this.config;
    console.log(baseUrl);
    console.log(rest);
    console.log(this.services.pluck(this, 'name', 'version').join('@'));
    this.services.doIt((a) => a * 10, 1, 2, 3);
  }
}

export function bootstrap() {
  return new JsApp({
    version: `${version}`,
    name: 'rollup-demo',
    config: config
  });
}

