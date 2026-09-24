import "./Industries.css";
function Industries() {
  return (
    <div>
      <section class="verticals">
        <div class="hero">
          <div class="hero-left">
            <h1 id="h1">
              pattern recognition across <br />
              <span id="fits">across verticals</span>
            </h1>
          </div>

          <div class="hero-right">
            <p>
              <span class="highlight">
                Two decades of implementations means we've seen your problem
                before. Industry templates, compliance defaults, and playbooks
                included.
              </span>
            </p>
          </div>
        </div>

        <div class="list">
          <a href="#" class="item active">
            <div class="number">01</div>

            <div class="title">
              <span class="highlight">Manufacturing</span>
            </div>

            <div class="description">
              Manufacturing ERP on Odoo, MRP, production planning, quality
              control, and shop-floor visibility.
            </div>

            <div class="arrow">↗</div>
          </a>

          <a href="#" class="item">
            <div class="number">02</div>

            <div class="title">
              Retail &<br />
              eCommerce
            </div>

            <div class="description">
              Retail ERP, Odoo POS, omnichannel inventory, loyalty, and
              Shopify/Magento integrations.
            </div>

            <div class="arrow">↗</div>
          </a>

          <a href="#" class="item">
            <div class="number">03</div>

            <div class="title">
              Professional
              <br />
              Services
            </div>

            <div class="description">
              PSA on Odoo, project accounting, timesheet-to-invoice, resource
              planning, and utilization tracking.
            </div>

            <div class="arrow">↗</div>
          </a>

          <a href="#" class="item">
            <div class="number">04</div>

            <div class="title">Public Sector</div>

            <div class="description">
              Public sector ERP at national scale, HR, payroll, grants,
              procurement controls, and auditable trails.
            </div>

            <div class="arrow">↗</div>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Industries;
