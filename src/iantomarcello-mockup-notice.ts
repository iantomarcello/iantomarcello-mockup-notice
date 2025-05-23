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
        --size: 460px;
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
        --scroll_shape_outside_margin_max: 50%;

        display: block;
        position: relative;
        z-index: 10000000;
        container-type: inline-size;
      }

      * {
        box-sizing: border-box;
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

      #dialog {
        // width: 90vw;
        // height: 60vh;
        font-size: 1rem;
        font-family: "Sora", sans-serif;
        color: var(--colour_primary_dark);
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        margin-block-start: auto;
        margin-inline-start: auto;

        @starting-style {
          
        }
      }

      .dialog-content {
        --shape_inside: var(--colour_secondary);
        --shape_outside: transparent;
        --shape: radial-gradient(
          circle at right bottom,
          var(--colour_secondary),
          var(--colour_secondary) calc(var(--size)),
          transparent calc(var(--size)  + 1px)
        );
        width: var(--size);
        height: var(--size);
        mask-image: var(--shape);
        position: fixed;
        bottom: 0;
        right: 0;
        padding-right: 1ch;
        padding-left: 1ch;
        overflow: auto;

        @container (width < 460px) {
          --size: 100vw;
        }

        &::before, &::after {
          content: "";
        }

        &::before {
          width: 100%;
          height: 100%;
        }

        /* The shape -outside to keep text inside. */
        &::before {
          float: left;
          shape-outside: var(--shape);
          shape-outside: radial-gradient(
            circle at right bottom,
            transparent,
            transparent calc(var(--size)),
            var(--colour_secondary) calc(var(--size)  + 1px)
          );
          shape-image-threshold: 0.1;
          shape-margin: 5%;
          animation-name: moveShapeOutside;
          animation-duration: 1ms; /* Firefox requires this to apply the animation */
          animation-direction: alternate;
          animation-timeline: scroll(block nearest);
        }

        /* The sector shape */
        &::after {
          width: 100%;
          height: 100%;
          background-image: var(--shape);
          position: fixed;
          top: 0;
          left: 0;
          z-index: -1;
        }

        header {
            padding-top: 1.8em;
            text-align: right;
        }
      }

      #dialogCloseButton {
        --size: 4rem;
        width: min(62px, var(--size));
        aspect-ratio: 1;
        display: block;
        padding: 1rem;
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        border-radius: 50%;
        border: none;
        background-color: var(--colour_secondary);
        cursor: pointer;
        filter: drop-shadow(0 0 2px #33333333);
        translate: 120% 120%;
        transition: scale 0.2s linear,
          translate 0.6s cubic-bezier(.72,.01,.24,.98)
        ;

        &:hover {
          scale: 1.1;
        }

        &::before, &::after {
          content: "";
          width: 40%;
          height: 3px;
          border-radius: 50px;
          background-color: var(--colour_primary_dark);
          aspect-ratio: 1;
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
        }
        &::before { rotate: 45deg; }
        &::after { rotate: -45deg; }

        [open] & {
          translate: 0% 0%;
        }
      }

      /* Move shape-outside on scroll. */
      /* TODO: Not perfect */
      @keyframes moveShapeOutside {
        0% { margin-top: 0; }
        10% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.1); }
        20% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.2); }
        30% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.3); }
        40% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.4); }
        50% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.5); }
        60% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.6); }
        70% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.7); }
        80% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.8); }
        90% { margin-top: calc(var(--scroll_shape_outside_margin_max) * 0.9); }
        100% { margin-top: var(--scroll_shape_outside_margin_max); }
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
          <button id="dialogCloseButton" @click="${() => this.dialog.close()}"></button>
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
              <p>In any case, enjoy what you see. 😁</p>
              <p>
                <small>
                  Have a look at my <a href="https://iantomarcello.com" target="_blank">PWA Website</a>. or;
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