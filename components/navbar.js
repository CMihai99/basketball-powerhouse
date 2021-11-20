// ===-----------------------------------------------------------------------------------===
// Copyright (c) 2021 Calinescu Mihai, Bencu Bogdan
//
// For copying notice, see https://github.com/CMihai99/basketball-powerhouse/blob/main/COPYING.
// For licenses we use, see https://github.com/CMihai99/basketball-powerhouse/tree/main/LICENSES.
// ===-----------------------------------------------------------------------------------===

class navbar extends HTMLElement {
  // connectedCallback is used to add a navigation-bar to the page.
  // It runs each time your custom element is inserted into the DOM.
  connectedCallback() {
    this.innerHTML =
    `
    <nav class="navbar">
      <div class="navbar-header">
        <a href="index.html">
          <h3 class="nav-title">Basketball Powerhouse</h3>
          <img src="resources/icon.svg" class="nav-icon">
        </a>

        <div class="search-toggle-bar" data-toggle="dropdown">
          <input class="form-control" type="text" placeholder="Search">
        </div>

        <ul class="menu" id="search-menu"></ul>
      </div>

      <div class="nav navbar-nav navbar-right">
        <li>
          <div class="options-toggle-icons" data-toggle="dropdown">
            Calculators
            <span class="caret"></span>
          </div>

          <ul class="dropdown-menu" id="options-menu">
            <li>
              <a href="/html/calculators/1.html">1</a>
            </li>
            <li>
              <a href="/html/calculators/2.html">2</a>
            </li>
            <li>
              <a href="/html/calculators/3.html">3</a>
            </li>
            <li>
              <a href="/html/calculators/4.html">4</a>
            </li>
            <li>
              <a href="/html/calculators/5.html">5</a>
            </li>
          </ul>
        </li>

        <li>
          <div class="options-toggle-icons" data-toggle="dropdown">
            Coaching Resources
            <span class="caret"></span>
          </div>

          <ul class="dropdown-menu" id="options-menu">
            <li>
              <a href="/html/resources/coaches/drills.html">Drills</a>
            </li>
            <li>
              <a href="/html/resources/coaches/plays.html">Plays</a>
            </li>
            <li>
              <a href="/html/resources/coaches/strategies/offense.html">Offensive Strategies</a>
            </li>
            <li>
              <a href="/html/resources/coaches/strategies/defense.html">Defensive Strategies</a>
            </li>
            <li>
              <a href="/html/resources/coaches/tactics.html">Tactics & Philosophies</a>
            </li>
          </ul>
        </li>

        <li>
          <div class="options-toggle-icons" data-toggle="dropdown">
            Player Resources
            <span class="caret"></span>
          </div>

          <ul class="dropdown-menu" id="options-menu">
            <li>
              <a href="/html/resources/players/drills.html">Drills</a>
            </li>
            <li>
              <a href="/html/resources/players/workouts.html">Workouts</a>
            </li>
            <li>
              <a href="/html/resources/players/skill-development.html">Skill Development</a>
            </li>
            <li>
              <a href="/html/resources/players/strength-and-conditioning.html">Strength & Conditioning</a>
            </li>
            <li>
              <a href="/html/resources/players/tips.html">Tips & Advice</a>
            </li>
          </ul>
        </li>

        <li>
          <div class="options-toggle-icons" data-toggle="dropdown">
            <img src="/resources/options-menu.svg">
            <span class="caret"></span>
          </div>

          <ul class="dropdown-menu" id="options-menu">
            <li>
              <a href="mailto:basketball-powerhouse@gmail.com?subject=Sent%20from%20your%20website&body=Hey%20Basketball%20Powerhouse%2C%20I%20am%20contacting%20you%20in%20regard%20with%20...%0D%0A%0D%0ABest%20wishes%2C%0D%0AYOUR%20NAME"
              target="_blank">Contact Us</a>
            </li>
            <li>
            <a href="/html/about.html">About Us</a>
            </li>
            <li>
            <a href="/html/newsletter.html">Newsletter</a>
            </li>
            <li>
            <a href="https://github.com/CMihai99/basketball-powerhouse/issues/new?assignees=&labels=bug&template=bug_report.md&title=%5BBug%5D"
            target="_blank">Report a Bug</a>
            </li>
            <li>
              <a href="https://github.com/CMihai99/basketball-powerhouse/issues/new?assignees=&labels=feature&template=feature_request.md&title=%5BFeature%5D"
              target="_blank">Request a Feature</a>
            </li>
          </ul>
        </li>

      </div>
    </nav>
    `;
  }
}

// Register component
customElements.define("navbar-component", navbar);
