export const Section = (props) => {
  return (
    <div className={"flex w-screen h-screen " + props.bg}>
      {props.getContent()}
    </div>
  );
};
