import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo() {
    return (
        <div className="WeatherInfo">
            <h1></h1>
            <ul>
                <li><FormattedDate /></li>
                <li className="text-capitalize"></li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="d-flex">
                        <div>
                            WeatherIcon
                        </div>

                        <div>
                            WeatherTemperature
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <ul>
                        <li>Humidity:</li>
                        <li>Wind:</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}