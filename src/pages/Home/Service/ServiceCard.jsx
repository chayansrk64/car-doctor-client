 
const ServiceCard = ({ service }) => {
  console.log(service);
  const { img, price, title } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-5">
      <figure className="px-10 pt-10">
        <img
          src={img}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price} </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
