class MockupNotice extends HTMLElement {
  constructor() {
    super();
    let shadow = this.attachShadow({mode: 'open'});

    let toggle = () => {
      !this.hasAttribute("open") ?
        this.setAttribute("open", "") :
        this.removeAttribute("open");
    };

    let html = `
      <style>
        @import("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap");

        :host {
          max-width: 600px;
          width: 24px;
          height: 24px;
          display: block;
          box-sizing: border-box;
          position: fixed;
          z-index: 99999;
          bottom: 32px;
          right: 32px;
          font-family: "Montserrat", sans-serif;
          transition: 0.7s cubic-bezier(0, 1, 0.5, 1);
          transition-property: right, bottom;
          box-sizing: border-box;
        }

        button {
          width: 24px;
          height: 24px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          z-index: 1;
          top: 0;
          right: 0;
          border-radius: 50px;
          border: 1px solid rgb(201, 201, 201);
          outline: none;
          background-color: #fbfbfbc2;
          box-shadow: 0 0px 2px 2px rgba(25, 25, 25, 0.1);
        }

        button::before {
          content: "i";
        }

        p {
          width: 100%;
          height: 100%;
          margin: 0;
          font-size: 14.5px;
          color: transparent;
          line-height: 1.4;
          overflow: hidden;
          border-radius: 50px;
        }

        a {
          color: #1F3972;
          font-weight: 600;
        }

        a:visited {
          color: #5163A1;
          font-weight: 400;
        }

        :host([open]) {
          width: calc(100% - 40px);
          height: auto;
          padding: 32px;
          bottom: 50%;
          right: 50%;
          transform: translate(50%, 50%);
          background-color: #fbfbfbfc;
          box-shadow: 0 2px 2px rgba(25, 25, 25, 0.2);
        }

        :host([open]) p {
          color: #565656;
          height: auto;
          position: relative;
          border-radius: 0;
        }

        :host([open]) button {
          top: -12px;
          right: -12px;
          background-color: white;
          box-shadow: 0 0px 2px 2px rgba(25, 25, 25, 0);
        }

        :host([open]) button::before {
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

        :host([open]) button::after {
          content: "";
          width: 10px;
          height: 1px;
          display: block;
          background-color: #000;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotate(-45deg);
        }


      </style>

      <button type="button">
      </button>
      <p>
        You are viewing a mockup site of
        <a target="_blank"><slot></slot></a>,
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
    `;

    let parsed = new DOMParser().parseFromString(html, "text/html");
    let style = parsed.head.firstElementChild;
    let body = parsed.body;

    body.querySelector('button').addEventListener("click", ev => toggle());
    body.querySelector('a').href = this.getAttribute("href");

    shadow.appendChild(style);
    [...body.children].forEach(child => shadow.appendChild(child))
  }
}
customElements.define("iantomarcello-mockup-notice", MockupNotice);
