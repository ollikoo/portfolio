import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = props => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            {
            props.slides.map((item) =>
                <Carousel.Item key={item.sys.id}>
                    <div className="carousel-item__content">
                        <h3>{item.fields.name}</h3>
                    </div>
                </Carousel.Item>
            )
            }
        </Carousel>
    );
  }

  export default Slider;