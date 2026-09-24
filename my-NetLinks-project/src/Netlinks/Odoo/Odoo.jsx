import "./Odoo.css";
function Odoo() {
  return (
    <div>
      <div class="whole">
        <div class="content">
          <h1>
            One platform. Every <br />
            department.
            <span id="fits">
              Actually <br />
              integrated.
            </span>
          </h1>
          <p>
            Certified Odoo partner, 50+ implementations, including a <br />
            500,000-employee HR and payroll engagement for a <br />
            national government with 1,000+ users. Finance, ops, <br />
            sales, HR, and manufacturing in one platform
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
            src="https://netlinks.af/illustrations/home-feature-odoo-1280.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Odoo;
