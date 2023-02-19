export const Section = (props) => {
  return (
    <div
      id={props.id}
      className={"flex snap-end w-screen h-screen " + props.bg}
    >
      {props.getContent()}
    </div>
  );
};
