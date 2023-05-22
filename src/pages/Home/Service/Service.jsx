 
import { useState, useEffect, useRef } from 'react';
import ServiceCard from './ServiceCard';
const Service = () => {

    const [services, setServices] = useState([]);
    const [ascending, setAscending] = useState(true);
    const searchRef = useRef(null);
    const [search, setSearch] = useState('')

    useEffect(()=> {
        fetch(`http://localhost:5000/services?search=${search}&sort=${ascending ? "ascending" : "descending"}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[ascending, search])

    const handleSearch = () => {
        console.log(searchRef.current.value);
        setSearch(searchRef.current.value)
    }
    
    return (
        <div>
            <div className="text-center my-5">
                <h3 className="text-3xl mt-3 text-red-600">Service</h3>
                <h2 className="text-5xl font-bold m-3">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
                
               
               <div className='flex justify-center my-4'>
               <div className="form-control">
                <div className="input-group">
                    <input type="text" ref={searchRef} placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
                </div>
               </div>
                                
                <button  onClick={() => setAscending(!ascending)} className='mt-3 btn btn-primary'>
                   
                    {ascending ? "Price: High to Low " : "Price: Low to High"}
                </button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                 {
                    services.map(service =>
                     <ServiceCard
                     key = {service._id}
                     service = {service}
                    ></ServiceCard> )
                 }
            </div>
        </div>
    );
};

export default Service;