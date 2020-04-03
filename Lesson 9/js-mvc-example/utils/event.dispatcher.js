export class Event {
  constructor() {
    this._listeners = [];
  }

  attach(listener) {
    this._listeners.push(listener);
  }

  notify(args) {
    for (let i = 0; i < this._listeners.length; i++) {
      this._listeners[i](args);
    }
  }
}