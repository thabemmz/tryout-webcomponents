const userTemplate = document.createElement('template');
userTemplate.innerHTML = `
  <style>
    li {
      color: red;
      font-weight: bold;
    }
  </style>

  <li><slot></slot></li>
`;

class User extends HTMLElement {
  constructor() {
    super();

    // The mode determines whether the shadow DOM
    // is accessible outside its scope (via User.shadowRoot)
    this.attachShadow({ mode: 'open' });
    this._user = this.shadowRoot.appendChild(userTemplate.content.cloneNode(true));

    console.log('constructed');
  }

  static get observedAttributes() {
    return ['name'];
  }

  connectedCallback() {
    console.log('Connected!');
  }

  disconnectedCallback() {
    console.log('Disconnected!');
  }

  attributeChangedCallback(name, oldVal, newVal) {
    console.log('kom je hier');
    console.log(this._user.querySelector('li'));
    this._user.querySelector('li').innerHTML = newVal;
  }
}

customElements.define('enrise-user', User);
