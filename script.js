import { LitElement, html, css } from 'lit-element';

class MockupNotice extends LitElement {
  static get styles() {
    return [
      css`
        @import("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
      `,
      css`
        :host {
          width: 100%;
          height: 100vh;
          display: block;
          padding: 20px;
          box-sizing: border-box;
          position: fixed;
          z-index: 99999;
          top: 0;
          left: 0;
          border: none;
          font-family: "Montserrat", sans-serif;
          pointer-events: none;
          overflow: hidden;
        }

        section {
          width: 100%;
          max-width: 0;
          margin: 0;
          padding: 0;
          min-width: 24px;
          min-height: 24px;
          max-height: 24px;
          position: absolute;
          top: calc(100% - 32px);
          left: calc(100% - 32px);
          transform: translate(-100%, -100%);
          box-sizing: border-box;
          background-color: #fbfbfb00;
          transition: all 0.7s cubic-bezier(0, 1, 0.5, 1);
        }

        button {
          width: 24px;
          height: 24px;
          border: none;
          cursor: pointer;
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          pointer-events: auto;
          border-radius: 50px;
          border: 1px solid rgb(201, 201, 201);
          outline: none;
          box-shadow: 0 0px 2px 2px rgba(25, 25, 25, 0.1);
        }

        p {
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
          position: absolute;
          font-size: 0.9em;
          color: #000;
          line-height: 1.4em;
          pointer-events: auto;
          opacity: 0;
          transition: all 0.7s cubic-bezier(0, 1, 0.5, 1);
          overflow: hidden;
        }

        :host([open]) section {
          max-width: 600px;
          padding: 32px;
          max-height: 100vh;
          position: relative;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: #fbfbfbe5;
          box-shadow: 0 2px 2px 0px rgba(0, 0, 0, 0.2);
        }

        :host([open]) p {
          position: relative;
          opacity: 1;
        }

        :host([open]) button {
          top: -12px;
          right: -12px;
          box-shadow: 0 0px 2px 2px rgba(25, 25, 25, 0);
        }
      `,
    ]
  }

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      href: { type: String, reflect: true },
      link: { type: String, reflect: true },
    }
  }

  constructor() {
    super();
    this.open = false;
    this.href = "";
    this.link = "link";
  }

  toggle() {
    this.open = !this.open;
  }

  render() {
    return html`
      <section>
        <button type="button" @click=${this.toggle}>
          <span>i</span>
        </button>
        <p>
          You are viewing a mockup site of
          <a .href="${this.href}" target="_blank"><slot>${this.link}</slot></a>,
          which may or may not have modifications or alterations from the
          actual site to demostrate a certain functionality or purpose.
          <br>
          <br>
          In any case, enjoy what you see. 😄
          <br>
          <br>
          <br>
            <small>
              Have a look at my <a href="https://iantomarcello.com" target="_blank">PWA Website</a>. or;
              <br>
              Check out my <a href="https://iantomarcello.github" target="_blank">GitHub</a>.
            </small>
        </p>
      </section>
    `;
  }
}
customElements.define("iantomarcello-mockup-notice", MockupNotice);
