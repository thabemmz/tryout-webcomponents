const userlistTemplate = document.createElement('template');
userlistTemplate.innerHTML = `
  <style>
    padding: 1rem;
    border: 1px solid red;
  </style>

  <ul>
    <slot></slot>
  </ul>
`;

class UserList extends HTMLElement {
  constructor() {
    super();

    // The mode determines whether the shadow DOM
    // is accessible outside its scope (via User.shadowRoot)
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(userlistTemplate.content.cloneNode(true));
  }

  connectedCallback() {
    console.log('Connected!');
  }

  disconnectedCallback() {
    console.log('Disconnected!');
  }
}

customElements.define('enrise-userlist', UserList);
