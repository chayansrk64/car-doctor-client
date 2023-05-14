import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from 'react'

const CheckOut = () => {

  const service = useLoaderData();
  const {_id, title, price, img } = service;
  const {user} = useContext(AuthContext);

  const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            date,
            service: title,
            img,
            service_id: _id,
            price: price
        }
        console.log(booking);


        fetch('https://car-doctor-server-bice.vercel.app/bookings', {
            method: "POST",
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert("Service booked Successfully!")
            }
        })

  }

  return (
    <div>
      <div>
        <h2 className="text-center text-3xl font-bold">CheckOut page title: {title}</h2>
      </div>
      <div>
        <form onSubmit={handleBookService}>
                <div className="card-body">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text"> Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input
                      type="text"
                      name="due"
                      defaultValue={'$'+ price}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      placeholder="phone"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email}
                      className="input input-bordered"
                    />
                  </div>
                  
                  </div>
                  <div className="form-control mt-6">
                   
                  <textarea className="textarea textarea-warning" placeholder="Bio"></textarea>
                  </div>
                  <div className="form-control mt-6">
                     <input className="btn btn-warning" type="submit" value="Order Confirm" />
                  </div>
                </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
