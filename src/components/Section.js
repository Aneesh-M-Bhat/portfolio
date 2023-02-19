export const Section = (props) => {
  return (
    <div className={"flex snap-end w-screen h-screen " + props.bg}>
      {props.getContent()}
    </div>
  );
};
