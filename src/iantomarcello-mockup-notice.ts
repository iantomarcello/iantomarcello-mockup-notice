import { html, LitElement, css, PropertyValues } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';

/**
 * Imports an SVG and embed as HTML.
 *
 * @warning SVG rendered is not sanitized. Ensure the SVG file imported is a resource that you trust.
 */
@customElement('iantomarcello-mockup-notice')
export class ImMockupNotice extends LitElement {

  @property({ type: String }) label = 'Mockup Site';
  @property({ type: String }) href!:string;
  @query('#dialog') dialog!: HTMLDialogElement;

  static styles = [
    css`
      :host {
        --colour_primary: #394c8c;
        --colour_primary_light: #8190D3;
        --colour_primary_dark: #1F3972;
        --colour_primary_on: #fff;
        --colour_primary_light_on: #000;
        --colour_primary_dark_on: #fff;

        --colour_secondary: #F4AC7C;
        --colour_secondary_light: #FFDEAC;
        --colour_secondary_dark: #BF7D4F;
        --colour_secondary_on: #000;
        --colour_secondary_light_on: #000;
        --colour_secondary_dark_on: #000;
        display: block;
        position: relative;
        z-index: 10000000;
      }

      #promptButton {
        --size: 2rem;
        width: min(45px, var(--size));
        aspect-ratio: 1;
        display: block;
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        border: none;
        opacity: 0.5;
        cursor: pointer;
        filter: drop-shadow(0 0 2px #33333333);
        background-color: transparent;
        transition: opacity 0.1s ease-in-out;
        outline: 0;

        &::before, &::after {
          content: "";
          width: 100%;
          aspect-ratio: 1;
          position: absolute;
          top: 50%;
          left: 50%;
          border-radius: 50%;
          translate: -50% -50%;
          transition: translate 0.6s cubic-bezier(.72,.01,.24,.98);
        }

        &::after {
          content: "i";
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--colour_secondary);
        }

        &::before {
          outline: 2px solid var(--colour_secondary);
          outline-offset: 3px;
          border-radius: 50%;
          transition-delay: 0.1s
        }

        &:hover {
          opacity: 1;
        }

        &:has(+ [open]) {
          &::before, &::after {
            translate: 120% 120%;
          }
        }
      }

      #dialogCloseButton {
        --size: 4rem;
        width: min(62px, var(--size));
        aspect-ratio: 1;
        display: block;
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        background-color: var(--colour_secondary);
        border-radius: 50%;
        border: none;
        outline: 2px solid var(--colour_secondary);
        outline-offset: 3px;
        opacity: 0.5;
        cursor: pointer;
        filter: drop-shadow(0 0 2px #33333333);
        transition: opacity 0.1s ease-in-out,
          translate 0.66s cubic-bezier(.02,-0.01,1,.01);
        &:hover {
          opacity: 1;
        }

        &:has(+ [open]) {
          translate: 200% 200%;
        }
      }
    `
  ];

  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.dialog.showModal(); // temp
  }

  render() {
    return html`
      <div class="wrapper">
        <button id="promptButton" type="button" aria-label="prompt mock notice" @click="${() => this.dialog.showModal()}"></button>
        <dialog id="dialog">
          <button id="dialogCloseButton"></button>
          <article class="dialog-content">
            <header>
              <p>
                You are viewing a mockup site of <a target="_blank" .href=${this.href}>${this.label}</a>, 
                which may or may not have modifications or alterations from the 
                actual site to demostrate a certain functionality or purpose.
              </p>
            </header>
            <section><slot></slot></section>
            <footer>
              <p>In any case, enjoy what you see. 😄</p>
              <p>
                <small>
                  Have a look at my <a href="https://iantomarcello.com" target="_blank">PWA Website</a>. or;
                  <br>
                  Check out my <a href="https://github.com/iantomarcello" target="_blank">GitHub</a>.
                </small>
              </p>
            </footer>
          </article>
        </dialog>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iantomarcello-mockup-notice': ImMockupNotice,
  }
}