export default function Skill({ title }) {
  return (
    <div className="px-1 mb-2">
      <div className="text-center text-sm md:text-lg w-fit px-4 py-1 bg-gradient-to-b from-c2 to-c3 rounded-lg shadow-lg text-c4 shadow-c1 overflow-hidden opacity-80">
        {title}
      </div>
    </div>
  );
}
