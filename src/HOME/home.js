import Nike from "../image/nike.png"
import adiddas from "../image/adiddas.png"
import airmax from "../image/airmax.png"
import airjordan from "../image/airjordan.png"
import "./home.css"
import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
            <div id="background">
                <div id="center_div">
                    <div id="nav_bar">
                        <ul>
                        <Link to="/men"><li>MEN</li></Link>
                        <Link to="/women"><li>WOMEN</li></Link>
                            <li>SALE</li>
                            <li>CUSTOMIZE</li>
                            <li>SNKRS</li>
                        </ul>
                    </div>
                    <hr/>
                    <div id="hero_box">
                        <div id="left_box">
                            <h1 id="main">Nike Air Max</h1><br/>
                            <h1 id="sec_main">Lebagh</h1>
                            <p>Nike Air Max is a line of shoes produced by Nike,
                                Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled
                                with pressurized gas,
                                visible from the exterior of the shoe and intended to provide cushioning to the underfoot.</p>
                            <div id="tags">
                                <h1>$190</h1>
                                <button>Add to cart</button>
                            </div>

                            <div id="slider_div">
                                <div id="box">
                                    <img src={adiddas} alt="adiddas" />
                                    <div>
                                        <h4>Nike</h4>
                                        <h3>$180</h3>
                                    </div>
                                </div>
                                <div id="box">
                                    <img src={airjordan} alt="adiddas" />
                                    <div>
                                        <h4>Adiddas</h4>
                                        <h3>$120</h3>
                                    </div>
                                </div>
                                <div id="box">
                                    <img src={airmax} alt="adiddas" />
                                    <div>
                                        <h4>AirJordan</h4>
                                        <h3>$220</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                            <img src={Nike} alt="Nike" id="big_shoe"/>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Home;