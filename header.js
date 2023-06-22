const tmpl = document.createElement('template');
tmpl.innerHTML = `
  <div class=grid-container>
    <div class="grid-100">
      <h2 style="text-align: center; margin-bottom: 5px; margin-top: 15px;">mary's little big website</h2>
    </div>
  </div>

  <div class=grid-container style="">
    <div class="grid-100" style="text-align: center;">
      <span class="terminal-prompt">
        <nav>
          <a href="/about.html">about</a>
          <a href="/open-source.html">open source</a>
          <a href="/conference-talks.html">conference talks</a>
          <a href="/career.html">career</a>
          <a href="https://dev.to/mmarchini">blog</a>
          <a href="https://github.com/mmarchini">github</a>
          <a href="https://www.linkedin.com/in/mary-marchini/">linkedin</a>
          <a rel="me" href="https://terra.incognita.net/@mary">mastodon</a>
        </nav>
      </span>
    </div>
  </div>

  <hr style="border-color: var(--primary-color);">
`;

class MaryHeader extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();

    // write element functionality in here
  }

  connectedCallback() {
    // this.appendChild('<h1>foo</h1>');
    this.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define("mary-header", MaryHeader);
