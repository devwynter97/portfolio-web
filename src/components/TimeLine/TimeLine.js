import React, { useState, useRef, useEffect, createRef } from 'react';

import { CarouselButton, CarouselButtonDot, CarouselButtons, CarouselContainer, CarouselItem, CarouselItemImg, CarouselItemText, CarouselItemTitle, CarouselMobileScrollNode } from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
// import { TimeLineData } from '../../constants/constants';

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  // const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: 'smooth' });
  // }

  // const handleClick = (e, i) => {
  //   e.preventDefault();

  //   if (carouselRef.current) {
  //     const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length));
      
  //     scroll(carouselRef.current, scrollLeft);
  //   }
  // }

  // const handleScroll = () => {
  //   if (carouselRef.current) {
  //     const index = Math.round((carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7)) * TimeLineData.length);

  //     setActiveItem(index);
  //   }
  // }

  // // snap back to beginning of scroll when window is resized
  // // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   }

  //   window.addEventListener('resize', handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        <p>
        Atharva Mudalgikar, <br/>
        Network engineer - working on Junos platform on EVPN-VXLAN fabric technology. I build, manage connectivity and security services for <b style={ {color:"white"}}> Data Center  </b> applications.<br/>
        Passionate about tech, love exploring various technology, and love to speak on tech.<br/>
        Thanks for hanging by... cheers~
        </p>

      </SectionText>

      // <CarouselContainer ref={carouselRef}>
      //       <>
      //       {TimeLineData.map((item, index)=>(
      //         <CarouselMobileScrollNode>
                
      //         </CarouselMobileScrollNode>
      //       ))}
      //       </>
      // </CarouselContainer>
    </Section>
  );
};

export default Timeline;
