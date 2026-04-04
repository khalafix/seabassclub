import Link from "next/link";

export default function FeaturesHomeFour() {
  return (
    <section className="feature-section mx-md-3 mx-xl-4 rounded-4"
      style={{ backgroundImage: "url(/assets/img/core-img/seabass-lemon-bg.jpg)" }}>
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
  <div className="row g-5 g-sm-4">
    <div className="col-12 col-sm-6">
      <div className="section-heading">
        <span className="subtitle"><span>Our Advantages</span></span>
        <h2 className="mb-5">
          Delivering premium sea bass through sustainable aquaculture.
        </h2>
        <Link href="/contact" className="btn btn-primary">
          <span>Contact Us <i className="ti ti-arrow-up-right"></i></span>
          <span>Contact Us <i className="ti ti-arrow-up-right"></i></span>
        </Link>
      </div>
    </div>

    <div className="col-12 col-sm-6">
      <div className="d-flex flex-column gap-4">

        {/* Feature 1 */}
        <div className="feature-card fadeInUp" data-delay="0.5">
          <h2 className="mb-3">Sustainable Marine Farming</h2>
          <p className="mb-0">
            Our fish are raised in open sea cages with natural water flow, reducing environmental impact while ensuring a clean and healthy growing environment.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="feature-card fadeInUp" data-delay="0.6">
          <h2 className="mb-3">Premium Quality & Nutrition</h2>
          <p className="mb-0">
            Rich in omega-3 and essential nutrients, our barramundi offers exceptional taste, high protein value, and meets international quality standards.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="feature-card fadeInUp" data-delay="0.7">
          <h2 className="mb-3">Reliable Year-Round Supply</h2>
          <p className="mb-0">
            With large-scale production capacity, we ensure consistent supply of sea bass in various sizes for both domestic and global markets.
          </p>
        </div>

      </div>
    </div>
  </div>
</div>
      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
