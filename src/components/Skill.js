export default function Skill(props) {
  return (
    <div className="px-1 mb-2">
      <div className="text-center text-sm md:text-lg w-fit px-4 py-1 bg-l3 rounded-lg shadow-lg overflow-hidden">
        {props.title}
      </div>
    </div>
  );
}
