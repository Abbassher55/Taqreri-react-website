const PagesHeader = (props) => {
  return (
    <section className="bg-half-blue container my-6 bg-opacity-75 p-7 md:rounded-2xl">
      <div className="flex flex-col-reverse gap-5 md:flex-row">
        <div className="md:w-3/5">
          <h3 className="text-3xl font-bold text-theme-blue md:text-5xl">
            {props.title}
          </h3>
          <p className="mt-6 text-2xl leading-9 text-white">
            {props.description}
          </p>
        </div>
        <div className="flex items-center justify-center md:w-2/5">
          <img src={props.image} className="h-56" alt={props.title} />
        </div>
      </div>
    </section>
  );
};

export default PagesHeader;
