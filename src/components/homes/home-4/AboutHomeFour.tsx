import Image from "next/image";

export default function AboutHomeFour() {
  return (
    <div id="about-us" className="about-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>
      {/* <!-- About Content --> */}
      <div className="container">
        <div className="about-content fadeInUp" data-delay="0.5">
          <h2>We specialize in sustainable fish farming in open sea environments.</h2>
<Image src="/assets/img/bg-img/1-barramundi.png" alt="" width={1920} height={1080} priority/>
<h2>
  Delivering export-quality <span className="text-primary">Sea Bass (Barramundi)</span> to global markets.
</h2>
<Image src="/assets/img/bg-img/2-barramundi.png" alt="" width={1920} height={1080} priority/>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </div>
  )
}
