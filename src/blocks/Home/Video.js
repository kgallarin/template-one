import styled from "styled-components";

const VideoHero = styled.video`
  background: #000;
  color: #fff;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  height: auto;
  width: auto;
  z-index: -1;
`;

export default VideoHero;
