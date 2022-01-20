const template = document.createElement("template");

template.innerHTML = `
  <style>
    *,
    ::before,
    ::after {
        box-sizing: border-box;
        border-width: 0;
    } 
    
    .card {
        perspective: 600px;
        cursor: pointer;
    }
    .card .card--inner {
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
    }
    :host([flipped][flip-direction="horizontal"]) .card .card--inner{
        transform: rotateY(180deg);
    }
    :host([flipped][flip-direction="vertical"]) .card .card--inner{
      transform: rotateX(180deg);
    }
    .card .card--inner .card-face {
        position: relative;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }
    .card .card--inner .card-face.card-face--back {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
    :host([flip-direction="horizontal"]) .card .card--inner .card-face.card-face--back{
      transform: rotateY(180deg);
    }
    :host([flip-direction="vertical"]) .card .card--inner .card-face.card-face--back{
      transform: rotateX(180deg);
    }
  </style>

  <div class="card">
    <div class="card--inner">
        <div class="card-face card-face--front">
            <slot name="front"></slot>
        </div>
        <div class="card-face card-face--back">
            <slot name="back"></slot>
        </div>
    </div>
  </div>
`;

export class FlippableCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    if (!this.hasAttribute("flip-direction")) {
      this.flipDirection = "horizontal";
    }
    if (!this._isValidFlipDirection()) {
      this.flipDirection = "horizontal";
    }

    this.addEventListener("click", this._onClick);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this._onClick);
  }

  _onClick(event) {
    if (this.disabled) {
      return;
    }
    this._togglePressed();
  }

  get flipped() {
    return this.hasAttribute("flipped");
  }

  get flipDirection() {
    return this.getAttribute("flip-direction");
  }

  get disabled() {
    return this.hasAttribute("disabled");
  }

  set flipped(value) {
    const isFlipped = Boolean(value);
    if (isFlipped) this.setAttribute("flipped", "");
    else this.removeAttribute("flipped");
  }

  set flipDirection(value) {
    this.setAttribute("flip-direction", value);
  }

  _togglePressed() {
    this.flipped = !this.flipped;
  }

  _isValidFlipDirection() {
    return ["horizontal", "vertical"].includes(this.flipDirection);
  }
}

window.customElements.define("flippable-card", FlippableCard);
