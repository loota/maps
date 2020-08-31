class HidingDiv extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });

    const template = document.getElementById('hiding-div-template');
    const templateClone = template.content.cloneNode(true);

    shadowRoot.appendChild(templateClone);

    this.shadowRoot.addEventListener('click', () => {
      const contentSlot = this.shadowRoot
        .querySelector('slot[name="content"]');
      contentSlot.classList.toggle('hidden');
    });
  }
}
customElements.define('hiding-div', HidingDiv);
