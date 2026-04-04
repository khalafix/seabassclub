import Link from "next/link";
import Image from "next/image";

export default function ServiceHomeFour() {
  return (
    <section className="service-section style-two">
      {/* <!-- Divider --> */}
      <div className="divider"></div>

      <div className="container">
        {/* <!-- Section Heading --> */}
        <div className="section-heading text-center">
          <h3 className="mb-0 heading-chars" data-delay="0.5">Sea<span>bass</span></h3>
        </div>

        {/* <!-- Divider --> */}
        <div className="divider-sm"></div>

        <div className="row g-4">
           {/* Card 1 */}
  <div className="col-12 col-md-6 col-lg-4 translateY10">
    <div className="service-card-two fadeInUp" data-delay="0.5">
      <div className="shape">
        <Image src="/assets/img/core-img/shade5.png" alt="" width={1920} height={1080} priority/>
      </div>
      <div className="service-thumb">
        <Link href="/service-details" className="btn">Learn More <i className="ti ti-arrow-right"></i></Link>
        <Image src="/assets/img/core-img/Marine-Cage-Farming.jpg" alt="" width={1920} height={1080} priority/>
      </div>
      <div className="service-content">
        <Link href="/service-details">
          <h4 className="service-title">Marine Cage Farming</h4>
        </Link>
        <p className="mb-0">
          Sustainable fish farming in open sea cages, ensuring natural growth conditions and environmentally friendly production.
        </p>
      </div>
      <div className="service-number">01</div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="col-12 col-md-6 col-lg-4 translateY10">
    <div className="service-card-two fadeInUp" data-delay="0.6">
      <div className="shape">
        <Image src="/assets/img/core-img/shade5.png" alt="" width={1920} height={1080} priority/>
      </div>
      <div className="service-thumb">
        <Link href="/service-details" className="btn">Learn More <i className="ti ti-arrow-right"></i></Link>
        <Image src="/assets/img/core-img/Premium-Barramundi-Production.jpg" alt="" width={1920} height={1080} priority/>
      </div>
      <div className="service-content">
        <Link href="/service-details">
          <h4 className="service-title">Premium Barramundi Production</h4>
        </Link>
        <p className="mb-0">
          High-quality sea bass rich in omega-3, raised under expert supervision to meet international standards.
        </p>
      </div>
      <div className="service-number">02</div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="col-12 col-md-6 col-lg-4 translateY10">
    <div className="service-card-two fadeInUp" data-delay="0.7">
      <div className="shape">
        <Image src="/assets/img/core-img/shade5.png" alt="" width={1920} height={1080} priority/>
      </div>
      <div className="service-thumb">
        <Link href="/service-details" className="btn">Learn More <i className="ti ti-arrow-right"></i></Link>
        <Image src="/assets/img/core-img/global-supply.jpg" alt="" width={1920} height={1080} priority/>
      </div>
      <div className="service-content">
        <Link href="/service-details">
          <h4 className="service-title">Processing & Global Supply</h4>
        </Link>
        <p className="mb-0">
          From harvesting to packaging, we deliver export-ready seafood products with consistent quality all year round.
        </p>
      </div>
      <div className="service-number">03</div>
    </div>
  </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  )
}
