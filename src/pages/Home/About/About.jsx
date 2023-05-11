import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero py-20 bg-base-200">
             
        <div className="hero-content flex-col lg:flex-row">
           <div className='md:w-1/2 relative'>
                <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
                <img src={parts} className="w-1/2 absolute top-1/2 right-12 border-8 border-white border-success rounded-lg shadow-2xl" />
           </div>
          <div className='md:w-1/2'>
            <h2 className='text-3xl font-bold mb-3 text-red-500'>About Us</h2>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <p className='py-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            <button className="btn">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;