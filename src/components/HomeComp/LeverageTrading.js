import React, { useEffect } from "react";
import Cylinder from "../../assets/Cylinder.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Leveragetrading2 from "../../assets/leveragetrading2.png";
import "./LeverageTrading.css";
export default function LeverageTrading() {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    });
  },[]);
  return (
    <>
      <div style={{ backgroundColor: "#040818" }}>
        <h1
          className="heading-leverage"
          style={{ color: "white", marginBottom: "80px" }}
        >
          {" "}
          All-In-One Leveraged Trading Platform
        </h1>
        <div className="container" style={{ backgroundColor: "#040818" }}>
          <div className="row" style={{ marginBottom: "160px" }}>
            <div
              className="col-lg-6 col-md-12"
              style={{ display: "flex", alignItems: "center" }}
            >
              <div className="text-box-leverage" data-aos="fade-right">
                {" "}
                <h3 style={{ color: "white" }}>Optimized Trading Cost</h3>
                <p style={{ color: "#8694b9" }}>
                  MUX selects the most suitable liquidity route and
                  <br />
                  minimizes the composite cost for traders while
                  <br />
                  meeting the needs of opening positions
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                data-aos="fade-right"
                className="Leverage-image-box"
                style={{ height: "240px", width: 'fit-content' }}
              >
                <img style={{ height: "100%" }} src={Cylinder} />
              </div>
            </div>
          </div>

          {/* Leverage Block 2  */}
          <div className="row" style={{justifyContent:'space-between'}}>
            
            <div className="col-lg-6">
            <div className="Leverage-image-box" style={{ height: "240px", width: 'fit-content' }}>
              <img style={{ height: "100%" }}  src={Leveragetrading2} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="text-box-leverage">
                <h3 style={{ color: "white" }}>Smart Position Routing</h3>
                <p style={{    color: '#8694b9'}}>
                  MUX dynamically routes positions to suited underlying trading
                  protocols <br />based on market, position size and user preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
