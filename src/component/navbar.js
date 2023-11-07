class NavbarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = /* html */ `
      <nav class="fixed inset-x-0 bg-blue-500 px-6 py-4 flex justify-between items-center">
        <h1 id="logo" class="text-white font-bold">Aji</h1>
        <ul class="hidden md:flex gap-5 font-semibold text-white">
          <li class="hover:text-yellow-400 cursor-pointer transition-all ease-in-out">Home</li>
          <li class="hover:text-yellow-400 cursor-pointer transition-all ease-in-out">About</li>
          <li class="hover:text-yellow-400 cursor-pointer transition-all ease-in-out">Contact me</li>
        </ul>
        <button class="md:hidden bg-blue-900 rounded p-2 text-white">
          <svg viewBox="0 0 100 70" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      </nav>
    `;
  }
}

customElements.define("navbar-component", NavbarComponent);
