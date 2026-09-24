import "./Hero.css";
function Hero() {
  return (
    <div className="Hero-btn">
      <button>
        <p>
          20 years delivering from Kabul · Afghanistan's enterprise technology
          partner
        </p>
      </button>

      <div>
        <div class="whole">
          <div class="content">
            <h1>
              Enterprise Odoo, <br />
              custom software,
              <br /> and AI
              <span id="fits">
                engineered in <br />
                Afghanistan
              </span>
            </h1>
            <p>
              Afghanistan-based since 2005. We built the 500,000- <br />
              employee Odoo HR and payroll system for the national <br />
              government, and Jobs.af, the country's largest job-hunting <br />
              platform. Senior teams in Kabul delivering for clients across{" "}
              <br />
              Afghanistan, the GCC, India, and the US.
            </p>

            <button>
              <a href="">Engineering Philosophy</a>
            </button>
            <button className="Nav-button">Get Started</button>
          </div>
          <div>
            <img
              src="https://netlinks.af/illustrations/home-hero-1280.webp"
              alt=""
            />
          </div>
        </div>

        <div className="wholee">
          <div>
            <h1>
              500K <span id="fits">+</span>
            </h1>
            <p>
              Employees · <br />
              national-government Odoo <br />
              HR rollou
            </p>
          </div>
          <div>
            <h1>
              20 <span id="fits">yrs</span>
            </h1>
            <p>
              Delivering <br />
              enterprise <br />
              software from <br />
              Kabul
            </p>
          </div>
          <div>
            <h1>Jobs.af</h1>
            <p>
              Afghanistan's <br />
              largest job <br />
              platform, built by <br />
              NETLINKS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hero;
