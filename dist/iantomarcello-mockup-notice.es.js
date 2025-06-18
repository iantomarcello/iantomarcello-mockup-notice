import { css as d, LitElement as h, html as c } from "lit";
import { customElement as u, property as g, query as m } from "lit/decorators.js";
var _ = Object.getOwnPropertyDescriptor, f = (a, e, o, i) => {
  for (var t = i > 1 ? void 0 : i ? _(e, o) : e, r = a.length - 1, s; r >= 0; r--)
    (s = a[r]) && (t = s(t) || t);
  return t;
};
let p = class extends h {
  get _slottedChildren() {
    var e;
    const a = (e = this.shadowRoot) == null ? void 0 : e.querySelector("slot");
    return (a == null ? void 0 : a.assignedNodes({ flatten: !0 })) || [];
  }
  firstUpdated(a) {
    var o;
    const e = (o = this.shadowRoot) == null ? void 0 : o.querySelector("slot");
    e && (e.addEventListener("slotchange", () => {
      this.requestUpdate();
    }), this._slottedChildren.length > 0 && e.setAttribute("hidden", ""));
  }
  render() {
    var a, e;
    return c`
      <slot></slot>
      <div class="ring">
        ${((a = this._slottedChildren) == null ? void 0 : a.length) < 1 ? "null" : (e = this._slottedChildren) == null ? void 0 : e.map((o) => {
      var t;
      return [...((t = o.textContent) == null ? void 0 : t.trim()).split("")].map((r, s) => c`<span class="character" style="--index: ${s}">${r}</span>`);
    })}
      </div>
      `;
  }
};
p.styles = [d`
    :host {
      --offset: 0;
      --spacing: 1;
      display: block;
      aspect-ratio: 1;
    }

    .ring {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .character {
      --index: sibling-index();
      height: 50%;
      position: absolute;
      top: 0%;
      left: 50%;
      translate: -50% 0;
      transform-origin: center bottom;
      rotate: calc(var(--index) * (4deg * var(--spacing)) + (var(--offset) * 1deg));

      @supports(width: calc(sibling-index() * 1px)) {
        rotate: calc(sibling-index() * (4deg * var(--spacing)) + (var(--offset) * 1deg));
      }

      @container style(--spacing: full) {
        rotate: calc((sibling-index() / sibling-count() * 360deg) + (var(--offset) * 1deg));
      }
    }
  `];
p = f([
  u("circular-text")
], p);
var v = Object.defineProperty, b = Object.getOwnPropertyDescriptor, l = (a, e, o, i) => {
  for (var t = i > 1 ? void 0 : i ? b(e, o) : e, r = a.length - 1, s; r >= 0; r--)
    (s = a[r]) && (t = (i ? s(e, o, t) : s(t)) || t);
  return i && t && v(e, o, t), t;
};
let n = class extends h {
  constructor() {
    super(...arguments), this.label = "Mockup Site";
  }
  init() {
    window.CSS.registerProperty({
      name: "--deg",
      syntax: "<angle>",
      inherits: !1,
      initialValue: "0deg"
    });
  }
  showModal() {
    this.dialog.showModal();
  }
  close() {
    this.dialog.close();
  }
  firstUpdated(a) {
    this.init();
  }
  render() {
    return c`
      <div class="wrapper">
        <button id="promptButton" type="button" aria-label="prompt mock notice" @click="${() => this.dialog.showModal()}"></button>
        <dialog id="dialog">
          <button id="dialogCloseButton" class="has-curve-text" @click="${() => this.dialog.close()}">
            <circular-text>CLOSE</circular-text>
          </button>
          <h2 class="heading has-curve-text">
            <circular-text>THIS IS A MOCK</circular-text>
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
};
n.styles = [
  d`
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
        max-width: initial;
        max-height: initial;

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
        width: min(100dvw, var(--shape_size));
        height: var(--shape_size);
        padding-inline: 14px;

        /* The sector shape */
        mask-image: var(--shape);
        background-image: var(--shape);
        overflow: auto;
        scrollbar-width: thin;

        /* The shape -outside to keep text inside. */
        /* TODO: No perfect, consider using both float left and right using appropriate shapes. */
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
        width: calc(86px * 2);
        aspect-ratio: 1;
        display: block;
        padding: 0;
        cursor: pointer;
        filter: drop-shadow(1px 1px 1px #33333366);
        background-color: transparent;
        color: var(--colour_secondary);
        border: 0;
        position: fixed;
        z-index: 101;
        bottom: 0;
        right: 0;
        translate: 50% 50%;

        circular-text {
          --offset: 266;
          --spacing: 4;
          translate: 20% 20%;
          transition: translate 0.6s cubic-bezier(.72,.01,.24,.98),
                      opacity 0.1s ease-in-out;
          opacity: 0.5;

          :open & {
            translate: 2% 2%;
          }
        }

        &:is(:hover, :focus) circular-text {
          opacity: 1;
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
        width: calc((var(--size) + var(--size_margin)) * 2);
        aspect-ratio: 1;
        font-size: 16px;
        position: fixed;
        z-index: 100;
        bottom: 0;
        right: 0;
        margin: 0;
        overflow: visible;
        pointer-events: none;
        translate: 50% 50%;

        circular-text {
          --offset: 268;
          --spacing: 1.5;
          scale: 0.8;
          opacity: 0;
          font-size: 2rem;
          color: var(--colour_secondary);
          transition: scale 0.3s ease-out,
                      opacity 0.3s ease-out;

          @media (width < 500px) {
            font-size: 1.5rem;
            --offset: 300;
            --spacing: 1;
          };

          @media (width < 400px) {
            font-size: 1.3rem;
            --offset: 313;
            --spacing: 0.8;
          };
        }

        :open & circular-text{
          scale: 1;
          opacity: 1;
          transition: scale 0.6s cubic-bezier(.72,.01,.24,.98),
                      opacity 0.5s ease-in-out;
          transition-delay: 0.30s;
        }
      }

    `
];
l([
  g({ type: String })
], n.prototype, "label", 2);
l([
  g({ type: String })
], n.prototype, "href", 2);
l([
  m("#dialog")
], n.prototype, "dialog", 2);
n = l([
  u("iantomarcello-mockup-notice")
], n);
export {
  n as ImMockupNotice
};
