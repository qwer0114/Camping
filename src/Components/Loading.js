import { Audio } from "react-loader-spinner";
function Loading() {
  return (
    <Audio
      height="60"
      width="60"
      color="#FFF"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
}

export default Loading;
