import React from "react";
import About from "blocks/About";

import AboutImage from "assets/images/about/about-blank.jpg";

export default () => {
  return (
    <About>
      <About.Inner container justify="flex-start" alignItems="flex-start">
        <About.ItemList item md={6}>
          <About.ItemListInner>
            <About.TextContent>Who we are</About.TextContent>
            <About.TextContent>
              A <strong>Story</strong> about us
            </About.TextContent>
          </About.ItemListInner>
        </About.ItemList>
        <About.ItemList item md={6}>
          <About.ItemListInner>
            <About.TextContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              recusandae ratione soluta voluptates praesentium ipsam labore,
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              recusandae ratione soluta voluptates praesentium ipsam
              labore,Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquam recusandae ratione soluta voluptates praesentium ipsam
              labore,
            </About.TextContent>
            <About.TextContent>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              recusandae ratione soluta voluptates praesentium ipsam labore,
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </About.TextContent>
          </About.ItemListInner>
        </About.ItemList>
        <About.ItemList>
          <About.Image src={AboutImage} alt="/" />
        </About.ItemList>
      </About.Inner>
    </About>
  );
};
