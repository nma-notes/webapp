import { FC } from "react";
import Paragraph from "../components/Paragraph";

import p1 from "../assets/about/p1.jpg";
import p2 from "../assets/about/p2.jpg";

const About: FC = () => (
  <div className={"md:mt-20 m-5 flex flex-col"}>
    <Paragraph
      text={
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n" +
        "        tempor incididunt ut labore et dolore magna aliqua. In egestas erat\n" +
        "        imperdiet sed euismod nisi porta. Quisque id diam vel quam elementum\n" +
        "        pulvinar. Sit amet cursus sit amet dictum sit amet. Maecenas volutpat\n" +
        "        blandit aliquam etiam erat velit. Arcu odio ut sem nulla pharetra. Felis\n" +
        "        eget velit aliquet sagittis id. Et malesuada fames ac turpis. Vestibulum\n" +
        "        lectus mauris ultrices eros. Mi proin sed libero enim sed faucibus\n" +
        "        turpis in."
      }
      imageUrl={p1}
      imageAlt={"p1"}
      imagePosition={"left"}
    />
    <Paragraph
      text={
        "Ac orci phasellus egestas tellus rutrum tellus pellentesque. Ultrices sagittis orci a scelerisque purus semper. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue. At in tellus integer feugiat scelerisque. Integer eget aliquet nibh praesent tristique magna. Non diam phasellus vestibulum lorem. Orci dapibus ultrices in iaculis nunc sed augue lacus viverra. Placerat duis ultricies lacus sed turpis. Massa eget egestas purus viverra accumsan. Aliquam sem et tortor consequat id. Tincidunt praesent semper feugiat nibh sed. Quam nulla porttitor massa id neque. A scelerisque purus semper eget duis at tellus at. Semper eget duis at tellus at. At auctor urna nunc id cursus metus aliquam. Mattis pellentesque id nibh tortor id aliquet. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sit amet justo donec enim diam vulputate ut. Justo nec ultrices dui sapien eget mi proin sed."
      }
      imageUrl={p2}
      imageAlt={"p2"}
      imagePosition={"right"}
    />
    <Paragraph
      text={
        "Laoreet sit amet cursus sit amet dictum sit amet justo. Non consectetur a erat nam at lectus urna duis. Vel turpis nunc eget lorem dolor. Pellentesque habitant morbi tristique senectus. Ultrices sagittis orci a scelerisque purus semper eget duis at. Consequat nisl vel pretium lectus quam id. In nibh mauris cursus mattis molestie a iaculis at erat. Tellus rutrum tellus pellentesque eu tincidunt tortor. Suspendisse ultrices gravida dictum fusce. Amet dictum sit amet justo donec enim diam. Ultrices neque ornare aenean euismod elementum nisi quis eleifend quam. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. In fermentum posuere urna nec. Mauris in aliquam sem fringilla. Fermentum et sollicitudin ac orci phasellus egestas tellus. Ipsum nunc aliquet bibendum enim facilisis. Nullam eget felis eget nunc lobortis mattis."
      }
    />
  </div>
);

export default About;
