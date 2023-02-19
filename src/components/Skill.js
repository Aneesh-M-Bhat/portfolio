export default function Skill(props) {
  return (
    <div className="px-1 mb-2">
      <div className="text-center w-fit px-4 py-1 bg-white rounded-lg shadow-lg overflow-hidden">
        <h3 className="text-gray-800">{props.title}</h3>
      </div>
    </div>
  );
}
