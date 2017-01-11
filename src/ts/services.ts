import {Component} from './component.decorator';

/**
 * Example of a service class
 */
@Component
export class Services {
  /**
   * Create array of values from object
   * ```
   *   const services = new Services();
   *   let props = services.pluck({a: 1, b: 2, c: 3}, 'a', 'b');
   *   // => props = [1, 2]
   * ```
   */
  pluck<T, K extends keyof T>(o: T, ...names: K[]): T[K][] {
    return names.map(n => o[n]);
  }

  doIt(cb: (a: number, b: number) => void, ...args) {
    console.log('doIt', cb(Math.random(), Math.random()), ...args);
  }
}

// add static instance
export namespace Services {
  export const INSTANCE: Services = new Services();
}
