import banner_1 from '../../../assets/images/banner/1.jpg';
import banner_2 from '../../../assets/images/banner/2.jpg';
import banner_3 from '../../../assets/images/banner/3.jpg';
import banner_4 from '../../../assets/images/banner/4.jpg';
 
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner_1} className="w-full " />
          <div className="absolute flex justify-end gap-5 md:mr-14 transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle hover:bg-red-600">❮</a> 
            <a href="#slide2" className="btn btn-circle hover:bg-red-600">❯</a>
          </div>
          <div className="absolute gap-5  transform pt-24 p-4 md:pl-10 bg-gradient-to-r from-[#151515]  to-rgba(21, 21, 21, 0) h-full ">
                <div className='text-white space-y-7 md:w-1/2 '>
                    <h2 className='text-5xl md:text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  btn-success mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
        <img src={banner_2} className="w-full" />
          <div className="absolute flex justify-end gap-5 md:mr-14 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle hover:bg-red-600">❮</a> 
            <a href="#slide3" className="btn btn-circle hover:bg-red-600">❯</a>
          </div>
          <div className="absolute gap-5  transform pt-24 pl-10 bg-gradient-to-r from-[#151515]  to-rgba(21, 21, 21, 0) h-full ">
                <div className='text-white space-y-7 w-1/2 '>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  btn-success mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
        <img src={banner_3} className="w-full" />          <div className="absolute flex justify-end gap-5 md:mr-14 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle hover:bg-red-600">❮</a> 
            <a href="#slide4" className="btn btn-circle hover:bg-red-600">❯</a>
          </div>
          <div className="absolute gap-5  transform pt-24 pl-10 bg-gradient-to-r from-[#151515]  to-rgba(21, 21, 21, 0) h-full ">
                <div className='text-white space-y-7 w-1/2 '>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  btn-success mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
        <img src={banner_4} className="w-full" />          <div className="absolute flex justify-end gap-5 md:mr-14 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle hover:bg-red-600">❮</a> 
            <a href="#slide1" className="btn btn-circle hover:bg-red-600">❯</a>
          </div>
          <div className="absolute gap-5  transform pt-24 pl-10 bg-gradient-to-r from-[#151515]  to-rgba(21, 21, 21, 0) h-full ">
                <div className='text-white space-y-7 w-1/2 '>
                    <h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
                    <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <button className="btn  btn-success mr-5">Discover More</button>
                    <button className="btn btn-outline btn-warning">Latest Project</button>
                </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;