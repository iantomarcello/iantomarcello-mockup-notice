class MockupNotice extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});

    let toggle = () => {
      const dialog = shadow.querySelector('dialog');
      if (!dialog) return;
      !dialog.open
        ? shadow.querySelector('dialog')?.showModal()
        : shadow.querySelector('dialog')?.close();
    };

    // TODO: Close button when dialog open
    // TODO: Simple animation

    let getLabel = () => {
      return !this.hasAttribute('label') ?
        'Mockup' :
        this.getAttribute('label');
    };

    let html = `
      <style>
        @import("https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap");

        :host {
          display: block;
          font-family: Sora;
        }

        button:has(+ [open]) {
          background-color: white;
          box-shadow: 0 0px 2px 2px rgba(25, 25, 25, 0);
          position: fixed;
          position-anchor: --article;
          left: anchor(right);
          bottom: anchor(top);

          &::before
          &::after, {
            content: "";
            width: 10px;
            height: 1px;
            display: block;
            background-color: #000;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(45deg);
          }

          &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
          }
        }

        dialog {
          padding: 20px;
        }

        button {
          width: 24px;
          height: 24px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: fixed;
          z-index: 1;
          bottom: 20px;
          right: 20px;
          border-radius: 50px;
          border: 1px solid rgb(201, 201, 201);
          outline: none;
          background-color: #fbfbfbc2;
          box-shadow: 0 0px 2px 2px rgba(25, 25, 25, 0.1);

          &::before {
            content: "i";
          }
        }

        article {
          max-width: 600px;
          width: 100%;
          height: 100%;
          margin: 0;
          font-size: 14.5px;
          font-family: inherit;
          color: #565656;
          line-height: 1.4;
          anchor-name: --article;
        }

        a {
          color: #1F3972;
          font-family: inherit;
          font-weight: 600;
        }

        a:visited {
          color: #5163A1;
          font-weight: 400;
        }

        slot {
          font-family: inherit;
          font-size: inherit;
          margin-block-start: 2em;
          margin-block-end: 2em;
          display: block;
        }

        ::slotted(a) {
          display: inline-block !important;
          font-family: Sora;
          font-size: inherit;
        }

      </style>

      <button id="toggler" type="button" arial-label="Toggle IantoMarcello mockup dialog"></button>

      <dialog>
        <article>
          <header>
            <p>
              You are viewing a mockup site of <a target="_blank">${getLabel()}</a>, 
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
    `;

    let parsed = new DOMParser().parseFromString(html, 'text/html');
    let style = parsed.head.firstElementChild;
    let body = parsed.body;

    body.querySelector('#toggler')?.addEventListener('click', (ev) => toggle());
    const href = this.getAttribute('href');
    href && body.querySelector('a')?.setAttribute('href', href);

    style && shadow.appendChild(style);
    [...body.children].forEach(child => shadow.appendChild(child));
    shadow.querySelector('dialog')?.showModal();
  }
}
customElements.define('iantomarcello-mockup-notice', MockupNotice);
