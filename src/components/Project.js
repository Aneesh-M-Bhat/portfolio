export default function Project(props) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
      <button
        disabled
        className="bg-white rounded-lg w-full shadow-lg overflow-hidden hover:opacity-50"
      >
        {/* <img
          className="w-full h-56 object-cover object-center"
          src="https://dummyimage.com/720x400/ccc/000"
          alt="Project 3"
        /> */}
        {/* <div className="-rotate-90 absolute -translate-x-5 underline text-xl translate-y-20 ml-1">
          Features
        </div> */}
        <div className="p-4">
          <h3 className="text-gray-800 font-bold text-xl mb-2">
            {props.title}
          </h3>
          <ul className="text-gray-700 text-sm text-left">
            {props.about.map((item, index) => (
              <li key={index}># {item}</li>
            ))}
          </ul>
          {/* <a
            href="#"
            className="block bg-gray-800 text-white font-bold py-2 px-4 rounded-full mt-4 hover:bg-gray-700"
          >
            View Project
          </a> */}
        </div>
      </button>
    </div>
  );
}
