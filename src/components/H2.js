export default function H2(props) {
  return (
    <h2 className="flex text-3xl font-bold text-gray-800 mb-2">
      {props.title}
      {props.setSeeAll && (
        <span className="ml-auto font-light text-lg mt-auto">
          <button
            className="underline"
            onClick={() => props.setSeeAll(!props.seeAll)}
          >
            {props.seeAll
              ? "Collapse"
              : "View All " + props.count + " Projects"}
          </button>
        </span>
      )}
    </h2>
  );
}
