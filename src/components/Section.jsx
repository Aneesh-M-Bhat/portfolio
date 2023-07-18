export const Section = ({ children, id, bg }) => {
  return (
    <div id={id} className={"flex snap-end w-screen h-screen " + bg}>
      <div className="container m-auto px-6">{children}</div>
    </div>
  );
};
