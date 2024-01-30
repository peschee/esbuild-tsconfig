import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('test-component')
export class TestComponent extends LitElement {
  render() {
    return html`Foo, bar.`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'test-component': TestComponent;
  }
}
