import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {this.props.city &&
                <div>
                <p>Местоположение: {this.props.city}, {this.props.country}</p>
                <p>Температура: {this.props.temp}</p>
                <p>Влажность: {this.props.humidity}</p>
                </div>
                }
            </div>
        );
    }
}

export default Weather;