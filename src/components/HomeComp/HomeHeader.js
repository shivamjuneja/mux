import React,{useEffect} from "react";
import './HomeHeader.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeHeader() {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className="up-your-trade">
            <img className="bg" src="https://mux.network/bg.webp" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800" />
            <div className="trade-now">
                <div className="bg-icon">
                    <img className="bg-arb " src="https://mux.network/bg-arb.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800" />
                    <img class="bg-bsc" src="https://mux.network/bg-bsc.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800" />
                    <img class="bg-avax " src="https://mux.network/bg-avax.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800" />
                    <img class="bg-ftm " src="https://mux.network/bg-ftm.png" data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="800" />
                </div>
                <div className="title-box">
                    <div class="trade-text" data-aos="fade-up" data-aos-duration="1500">DECENTRALIZED SELF-CUSTODIAL LEVERAGED TRADING</div>
                    <div class="big-title" data-aos="fade-up" data-aos-duration="1500">Supercharged<br />for Traders</div>
                    <div class="sub-title" data-aos="fade-up" data-aos-duration="1500">Trade crypto with zero price impact, up to 100x leverage and aggregated liquidity. MUX protocol takes care of all the hassles so that you can experience optimized DEX trading on our platform.</div>
                    <a class="trade-button" href="https://app.mux.network/#/trade" target="_blank" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">Start Trading</a>
                    <a class="trade-button-mobile" href="https://app.mux.network/#/trade" target="_self" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="1000">Start Trading</a>
                </div>
            </div>
            <img class="bg-mobile" src="https://mux.network/bg-mobile.png" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="800"></img>

        </div>


        // <div data-aos="fade-left">Fade left</div>
    );
}
