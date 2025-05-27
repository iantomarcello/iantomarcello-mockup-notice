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
        --size_margin: 40px;
        --scroll_shape_outside_margin_max: 50%;

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
        container-type: inline-size;
      }

      * {
        box-sizing: border-box;
      }

      #promptButton {
        --prompt_size: 2rem;
        width: min(45px, var(--prompt_size));
        aspect-ratio: 1;
        display: block;
        position: fixed;
        z-index: 100;
        bottom: 1rem;
        right: 1rem;
        border: none;
        opacity: 0.5;
        cursor: pointer;
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
          transition: translate 0.6s cubic-bezier(.72,.01,.24,.98),
            outline-offset 0.1s cubic-bezier(.72,.01,.24,.98);
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

        &:is(:hover, :focus) {
          opacity: 1;
          &::before {
            outline-offset: 6px;
          }
        }

        &:has(~ :open) {
          &::before, &::after {
            translate: 120% 120%;
          }
        }
      }

      #dialog {
        font-size: 1rem;
        font-family: "Sora", sans-serif;
        color: var(--colour_primary_dark);
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
        margin-block-start: auto;
        margin-inline-start: auto;
        --deg: 360deg;
        mask-image: conic-gradient(at bottom right, transparent var(--deg), black calc(var(--deg) - 1deg), black);
        transition: --deg 0.6s cubic-bezier(.72,.01,.24,.98),
          overlay 0.6s ease-out allow-discrete,
          display 0.6s ease-out allow-discrete
        ;

        &:open {
          --deg: 270deg;

          @starting-style {
            --deg: 360deg;
          }
        }
      }

      .dialog-content {
        --cutout_size: 86px;
        --shape_inside: var(--colour_secondary);
        --shape_outside: transparent;
        --shape_size: calc(var(--size) + var(--size_margin));
        --shape: radial-gradient(
          circle at right bottom,
          var(--shape_outside),
          var(--shape_outside) var(--cutout_size),
          var(--shape_inside) calc(var(--cutout_size)  + 1px),
          var(--shape_inside) var(--size),
          var(--shape_outside) calc(var(--size)  + 1px)
        );
        width: var(--shape_size);
        height: var(--shape_size);
        /*
        position: fixed;
        bottom: 0;
        right: 0;
        */

        /* The sector shape */
        mask-image: var(--shape);
        background-image: var(--shape);
        overflow: auto;
        scrollbar-width: thin;

        @container (width < 460px) {
          --size: 100vw;
        }

        /* The shape -outside to keep text inside. */
        &::before {
          content: "";
          width: 100%;
          height: 100%;
          float: left;
          shape-outside: radial-gradient(
            circle at right bottom,
            var(--shape_outside),
            var(--shape_outside) calc(var(--size)),
            var(--shape_inside) calc(var(--size)  + 1px)
          );

          // shape-outside: radial-gradient(
          //   circle at right bottom,
          //   var(--shape_inside),
          //   var(--shape_inside) var(--cutout_size),
          //   var(--shape_outside) calc(var(--cutout_size)  + 1px),
          //   var(--shape_outside) calc(var(--size)),
          //   var(--shape_inside) calc(var(--size)  + 1px)
          // );
          shape-image-threshold: 0.1;
          shape-margin: 3%;
          animation-name: moveShapeOutside;
          animation-duration: 1ms; /* Firefox requires this to apply the animation */
          animation-direction: alternate;
          animation-timeline: scroll(block nearest);
        }

        header {
          padding-top: 3rem;
        }
      }

      .has-curve-text {
        overflow: hidden;

        svg {
          width: 100%;
          position: absolute;
          height: 100%;
          bottom: 0;
          right: 0;
          transition: all 0.1s ease-in-out;
        }

        path {
          fill: transparent;
        }

        text {
          fill: var(--colour_secondary);
          font-size: 1.2rem;
          font-family: "Sora", sans-serif;
          font-weight: 600;
        }
      }

      #dialogCloseButton {
        width: 86px;
        aspect-ratio: 1;
        display: block;
        padding: 0;
        cursor: pointer;
        filter: drop-shadow(1px 1px 1px #33333366);
        background-color: transparent;
        color: var(--colour_secondary);
        border: 0;
        border-top-left-radius: 100%;
        position: fixed;
        z-index: 101;
        bottom: 0;
        right: 0;
        translate: 120% 120%;
        transition: translate 0.6s cubic-bezier(.72,.01,.24,.98),
                    opacity 0.1s ease-in-out;
        opacity: 0.5;

        :open & {
          translate: 0% 0%;
        }

        &:is(:hover, :focus) {
          opacity: 1;

          svg {
            right: -2px;
            bottom: -2px;
          }
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

      .heading {
        width: calc(var(--size) + var(--size_margin) + 1.7lh);
        aspect-ratio: 1;
        font-size: 16px;
        position: fixed;
        z-index: 100;
        bottom: 0;
        right: 0;
        margin: 0;
        overflow: visible;
        scale: 0.8;
        opacity: 0;
        transition: scale 0.3s ease-out,
                    opacity 0.3s ease-out;
        transform-origin: bottom right;

        text {
          fill: var(--colour_secondary);
          font-size: 0.5rem;
        }

        :open & {
          scale: 1;
          opacity: 1;
          transition: scale 0.6s cubic-bezier(.72,.01,.24,.98),
                      opacity 0.5s ease-in-out;
          transition-delay: 0.30s;
        }
      }

    `
  ];

  init() {
    window.CSS.registerProperty({
      name: "--deg",
      syntax: "<angle>",
      inherits: false,
      initialValue: "0deg",
    });
  }

  showModal(): void {
    this.dialog.showModal();
  }

  close(): void {
    this.dialog.close();
  }

  renderCircularText(content: string, radius: number = 100, centreX = 0, centreY = 0, startOffset = 0, textLength = 100) {
    const randomId = "circulrText-" + Math.random().toString(36).substring(2, 15);
    return html`
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path id="${randomId}"
        d="
          M ${centreX - radius}, ${centreY}
          a ${radius},${radius} 0 1,1 ${2 * radius},0
          ${radius},${radius} 0 1,1 ${-2 * radius},0
        "
      /> 
      <text>
        <textPath startOffset="${startOffset}%" textLength="${textLength}%"  href="#${randomId}">${content}</textPath>
      </text>
    </svg>
    `;
  }

  protected firstUpdated(_changedProperties: PropertyValues) {
    this.init();
  }

  render() {
    return html`
      <div class="wrapper">
        <button id="promptButton" type="button" aria-label="prompt mock notice" @click="${() => this.dialog.showModal()}"></button>
        <dialog id="dialog">
          <button id="dialogCloseButton" class="has-curve-text" @click="${() => this.dialog.close()}">
            ${this.renderCircularText('CLOSE', 90, 90 + 20, 90 + 20, 3)}
          </button>
          <h2 class="heading has-curve-text">
            ${this.renderCircularText('THIS IS A MOCK', 87, 100, 100, 0.5, 130)}
          </h2>
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