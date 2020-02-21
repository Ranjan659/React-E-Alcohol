import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

class Slider extends React.Component {
    render() {
        const images = [
            { url: "img/banner1.jpg" },
            { url: "img/banner2.jpg" },
            { url: "img/banner3.jpg" },
            { url: "img/banner4.jpg" },
        ];

        return (
            <div>
                <SimpleImageSlider
                    width={1350}
                    height={600}
                    images={images}
                />
            </div>
        );
    }
}


export default Slider;