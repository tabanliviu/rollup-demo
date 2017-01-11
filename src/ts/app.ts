import {config, Config} from './config/config';
import {Component} from './component.decorator';
import {Services} from './services';

export interface App {
  version: string,
  name: string,
  config: Config,
  services: Services
}

const version = '1.0.0';

@Component
class TsApp implements App {
  version: string;
  name: string;
  config: Config;
  services: Services;

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

export function bootstrap(): App {
  return new TsApp({
    version: `${version}`,
    name: 'rollup-demo',
    config: config
  });
}
