import "./Engineering.css";
function Engineering() {
  return (
    <div>
      <div class="whole">
        <div class="content">
          <h1>
            When nothing off-the- <br />
            shelf
            <span id="fits">quite fits.</span>
          </h1>
          <p>
            A senior product team, designers, PMs, engineers,
            <br />
            embedded with yours. Prototype in weeks, ship in <br />
            months, maintain what we build. No junior hand-offs.
          </p>
          <ul>
            <li>Senior-only squads, no ticket-shuffling to offshore pools</li>
            <li>
              Modern stacks: TypeScript, Python, PHP, Postgres, Kubernetes,
              serverless
            </li>
            <li>ISO 12207 + ISO 27001 certified delivery at the group level</li>
            <li>
              Compliance-ready from day one: SSO via SAML/OIDC, RBAC, audit
              logs, encryption
            </li>
          </ul>
          <button>
            <a href="">Engineering Philosophy</a>
          </button>
        </div>
        <div>
          <img
            src="https://netlinks.net/illustrations/home-feature-engineering-1280.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Engineering;
