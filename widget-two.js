/* eslint-disable */

class UUIPCompTwo extends HTMLElement {
  divTitle;

  constructor() {
    super();

    var shadow = this.attachShadow({ mode: "open" });

    this.buttonTitle = document.createElement("div");
    shadow.appendChild(this.divTitle);
  }

  connectedCallback() {
    this.divTitle.textContent = this.getAttribute("title");

    this.style.display = "block";
    this.style.height = "100%";
    this.style.overflow = "scroll";
    this.style.backgroundColor = this.randomColor();
    console.log("We did something");
    window.com.cisco.webexcc.dialerManager.makeOutDialCall("7757378412");
  }

  static get observedAttributes() {
    return ["title"];
  }

  attributeChangedCallback(name, vOld, vNew) {
    this.buttonTitle.textContent = vNew;
  }

  // -----------

  randomColor() {
    let color = "#";
    for (var i = 0; i < 3; i++) {
      color += "BCD"[Math.floor(Math.random() * 3)];
    }
    return color;
  }
}

customElements.define("uuip-widget-two", UUIPCompTwo);