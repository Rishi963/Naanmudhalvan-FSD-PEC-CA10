import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Logo from "../../Images/logo.png";
import Style from "../../Css/Style.css";
function Slidercomp() {
  return (
    <Carousel fade>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img className='imagecarousel' src= {"https://images.pexels.com/photos/3769747/pexels-photo-3769747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imagecarousel' src= {"https://images.pexels.com/photos/2547007/pexels-photo-2547007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img className='imagecarousel' src= {"https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slidercomp;