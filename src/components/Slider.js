import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Slider = props => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} pause="hover">
            {
            props.slides.map((item, i) =>
                <Carousel.Item key={i}>
                    <div className="carousel-item__content" style={{backgroundImage: `url(${item.fields.image ? item.fields.image.fields.file.url : ''})`}}>
                        <a href={item.fields.link} target="_blank" rel="noopener noreferrer">
                            <h3 className="carousel-item__name">{item.fields.name}</h3>
                            <h3 className="carousel-item__year">{item.fields.year}</h3>
                            <h3 className="carousel-item__role">{item.fields.role}</h3>
                            <box-icon name='link-external'></box-icon>
                        </a>
                    </div>
                </Carousel.Item>
            )
            }
        </Carousel>
    );
  }

  export default Slider;