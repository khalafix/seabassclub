"use client";

import { useJarallax } from "@/hooks/useJarallax";
import "jarallax/dist/jarallax.css";
import Image from "next/image";

export default function HeroHomFour() {
  const jarallaxRef = useJarallax(0.6);

  return (
    <section
      ref={jarallaxRef}
      className="hero-section style-four jarallax"
      style={{ backgroundImage: "url(/assets/img/bg-img/seabassclub-bg.jpg)" }}
    >
      {/* <!-- Hero Content --> */}
      <div className="hero-content h-100 mt-0">
        <div className="row g-4 align-items-end h-100">
          <div className="col-12 col-md-8 col-lg-6">
            <h2 className="mb-3 heading-chars" data-delay="0.5">
              Premium Barramundi, Naturally Raised at Sea
            </h2>
            <p className="mb-0 heading-word" data-delay="0.6">
              Experience high-quality sea bass grown in sustainable marine
              cages, rich in omega-3 and produced with care to deliver fresh,
              healthy, and export-grade seafood all year round.
            </p>
          </div>

          <div className="col-12 col-md-4 col-lg-6">
            <div className="text-end">
              <Image
                className="img-rotate360 w-auto h-auto"
                src="/assets/img/bg-img/seabass-sign.png"
                alt=""
                width={1920}
                height={1080}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
