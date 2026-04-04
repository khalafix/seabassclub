import Link from "next/link";
import Image from "next/image";

export default function FeaturesHomeOne() {
  return (
    <section className="features-section">
      {/* <!-- Divider --> */}
      <div className="divider"></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 col-xxl-6">
            <div className="section-heading text-center">
              <h2 className="mb-4">SKIN-ON V.S. SKINLESS</h2>
              <span className="subtitle">113 g Barramundi serving</span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Divider --> */}
      <div className="divider-sm"></div>

      <div className="container">
        <div className="row g-5 align-items-center">
          
          {/* <!-- Featured Image --> */}
          <div className="col-12 col-md-6">
            
            <div className="featured-img translateY10 me-xl-4">
              <Image
                className="tilt-image img-anim-left w-auto h-auto"
                src="/assets/img/core-img/skinless.jpg"
                alt=""
                width={800}
                height={800}
                priority
              />
              
            </div>
            <div className="featured-content pt-4">
              <h2 className="mb-3">600 mg of omega-3’s in skinless</h2>
              <p className="mb-4">100 calories | 21 g protein | 1.5 g fat</p>
              {/* <!-- List --> */}
              <ul className="list-unstyled mb-5 featured-list">
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg>{" "}
                  Mild, incredibly versatile
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg>{" "}
                  Excellent protein
                </li>
                
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg>{" "}
                  Skin is pretty delicious

                </li>
                
              </ul>
             
            </div>
          </div>
          {/* <!-- Featured Image --> */}
          <div className="col-12 col-md-6">
            
            <div className="featured-img translateY10 me-xl-4">
              <Image
                className="tilt-image img-anim-left w-auto h-auto"
                src="/assets/img/core-img/skin-on.jpg"
                alt=""
                width={800}
                height={800}
                priority
              />
              
            </div>
            <div className="featured-content pt-4">
              <h2 className="mb-3">2X the omega-3’s as skin-on</h2>
              <p className="mb-4">130 calories | 22 g protein | 4.5 g fat</p>
              {/* <!-- List --> */}
              <ul className="list-unstyled mb-5 featured-list">
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg>{" "}
                  High in collsgen
                </li>
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg>{" "}
                  Great for your skin and bones
                </li>
                
                <li>
                  <svg width="28" height="28">
                    <use href="#checkIcon2"></use>
                  </svg>{" "}
                  Skin is pretty delicious

                </li>
                
              </ul>
             
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div className="divider"></div>
    </section>
  );
}
