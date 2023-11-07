class HeaderComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
    <div class="w-full h-screen bg-red-500 flex justify-center items-center">
      <button
        id="btn"
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none"
      >
        Default
      </button>
    </div>
    `;
  }
}

customElements.define("header-component", HeaderComponent);
