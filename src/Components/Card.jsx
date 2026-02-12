function Card({ title, description, image }) {
  return (
    <div className="card lg:basis-[19%] md:basis-[30%] border basis-[300px] rounded-2xl pb-5 mb-5 bg-white border-slate-300">
      <img className="rounded-tl-2xl w-full rounded-tr-2xl" src={image} alt={title} />
      <div className="p-2">
      <h2 className="text-xl text-center font-semibold mb-1">{title}</h2>
      <p className="text-stone-700 text-center">{description}</p>
      </div>
    </div>
  );
} 

export default Card;
