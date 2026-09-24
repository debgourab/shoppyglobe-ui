import { useDispatch } from "react-redux";
import { setSearchTerm } from "../store/cartSlice";
import ProductList from "../components/ProductList";

const heroImages = [
  "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=700&q=85"
];

const categories = [
  { label: "Men's Fashion", query: "men's clothing", icon: "fashion", copy: "Everyday essentials & smart casual" },
  { label: "Jewellery", query: "jewelery", icon: "jewellery", copy: "Minimal pieces for every occasion" },
  { label: "Electronics", query: "electronics", icon: "electronics", copy: "Tech built for work and life" },
  { label: "All Products", query: "", icon: "all", copy: "Browse the complete collection" }
];

function CategoryIcon({ type }) {
  const sharedProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    focusable: "false",
    "aria-hidden": "true"
  };

  if (type === "fashion") {
    return (
      <svg {...sharedProps}>
        <path d="M8.4 4.5 5.2 6 3.5 9.4 6.7 11v8.5h10.6V11l3.2-1.6L18.8 6l-3.2-1.5A4.2 4.2 0 0 1 12 6.2a4.2 4.2 0 0 1-3.6-1.7Z" />
      </svg>
    );
  }

  if (type === "jewellery") {
    return (
      <svg {...sharedProps}>
        <path d="m7.2 5.3-3 4.1L12 19l7.8-9.6-3-4.1H7.2Z" />
        <path d="M4.2 9.4h15.6M8.3 5.3 12 19l3.7-13.7" />
      </svg>
    );
  }

  if (type === "electronics") {
    return (
      <svg {...sharedProps}>
        <rect x="3.5" y="4.5" width="17" height="11.5" rx="1.8" />
        <path d="M9 20h6M12 16v4" />
      </svg>
    );
  }

  return (
    <svg {...sharedProps}>
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

export default function Home() {
  const dispatch = useDispatch();

  function browseCategory(query) {
    dispatch(setSearchTerm(query));
    requestAnimationFrame(() => document.getElementById("products-heading")?.scrollIntoView({ behavior: "smooth" }));
  }

  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="hero-kicker-dot" /> New season collection is live</div>
            <h1>Better products.<br /><span>Smarter shopping.</span></h1>
            <p className="hero-text">
              Discover thoughtfully selected fashion, jewellery and electronics with secure checkout, reliable delivery and a seamless shopping experience.
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#products-heading">Shop collection <span>→</span></a>
              <button className="secondary-btn" type="button" onClick={() => browseCategory("electronics")}>Explore electronics</button>
            </div>

            <div className="hero-stats" aria-label="Store highlights">
              <div className="hero-stat"><strong>4.6/5</strong><span>Average product rating</span></div>
              <div className="hero-stat"><strong>100%</strong><span>Secure checkout flow</span></div>
              <div className="hero-stat"><strong>7 days</strong><span>Customer support</span></div>
            </div>
          </div>

          <div className="hero-showcase" aria-label="Featured products">
            <div className="hero-product-main"><img src={heroImages[0]} alt="Premium backpack" /></div>
            <div className="hero-product-small one"><img src={heroImages[1]} alt="Wireless headphones" /></div>
            <div className="hero-product-small two"><img src={heroImages[2]} alt="Jewellery collection" /></div>
            <div className="hero-floating-note">
              <div className="note-row">
                <span className="note-icon">✓</span>
                <div><small>Curated quality</small><strong>Top-rated products</strong></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container home-section" aria-labelledby="categories-heading">
        <div className="home-section-head">
          <div>
            <p className="eyebrow">Shop by category</p>
            <h2 id="categories-heading">Find your next favourite</h2>
          </div>
          <p>Simple categories. Better discovery.</p>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <button key={category.label} className="category-card" type="button" onClick={() => browseCategory(category.query)}>
              <span className="category-icon"><CategoryIcon type={category.icon} /></span>
              <h3>{category.label}</h3>
              <p>{category.copy}</p>
              <span className="category-link">Browse collection →</span>
            </button>
          ))}
        </div>

        <div className="trust-grid" aria-label="Shopping benefits">
          <div className="trust-item"><span className="trust-icon">✓</span><div><strong>Secure payments</strong><span>Protected account and checkout flow</span></div></div>
          <div className="trust-item"><span className="trust-icon">↗</span><div><strong>Fast delivery</strong><span>Free shipping on qualifying orders</span></div></div>
          <div className="trust-item"><span className="trust-icon">↺</span><div><strong>Easy shopping</strong><span>Simple cart and checkout experience</span></div></div>
          <div className="trust-item"><span className="trust-icon">◎</span><div><strong>Reliable support</strong><span>Help available throughout the week</span></div></div>
        </div>
      </section>

      <div className="container">
        <ProductList />
      </div>

      <section className="container newsletter-wrap" aria-label="Newsletter">
        <div className="newsletter">
          <div>
            <h2>Be first to discover what’s new.</h2>
            <p>Get product highlights, new arrivals and seasonal offers in your inbox.</p>
          </div>
          <form className="newsletter-action" onSubmit={(event) => event.preventDefault()}>
            <input type="email" aria-label="Email address" placeholder="Enter your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
