import React, { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
const InitialAnimation = () => {
  let tl = useRef<any>(null);
  let rect1 = useRef<any>(null);
  let rect2 = useRef<any>(null);
  let rect3 = useRef<any>(null);
  let p0 = useRef<any>(null);
  let p1 = useRef<any>(null);
  let p2 = useRef<any>(null);
  let p3 = useRef<any>(null);
  let txt1 = useRef<any>(null);
  let txt2 = useRef<any>(null);
  let txt3 = useRef<any>(null);
  let logo = useRef<any>(null);

  useEffect(() => {
    tl.current = gsap.timeline({ defaults: { ease: "expo" } }).set(["svg"], { opacity: 1 });

    tl.current
      .from(rect1.current, { opacity: 0, duration: 0.01 }, 0.45)
      .from(
        rect1.current,
        { scale: 0.8, transformOrigin: "50%", duration: 0.55 },
        0.45
      )
      .from(txt1.current, { y: 99, duration: 0.2 }, 0.5)
      .to(txt1.current, { opacity: 0, duration: 0.05 }, 1)
      .from(rect2.current, { opacity: 0, duration: 0.01 }, 1)
      .from(rect2.current, { scale: 0.8, transformOrigin: "50%" }, 1)
      .from(
        txt2.current,
        //@ts-ignore
        { y: 99, duration: 0.12, ease: "expo", duration: 0.5 },
        1
      )
      .to(txt2.current, { opacity: 0, duration: 0.05 }, 1.5)
      .from(rect3.current, { opacity: 0, duration: 0.01 }, 1.5)
      .from(rect3.current, { scale: 0.8, transformOrigin: "50%" }, 1.5)
      .from(
        txt3.current,
        //@ts-ignore
        { y: 99, duration: 0.12, ease: "expo", duration: 0.5 },
        1.5
      )
      .to([txt3.current, rect3.current], { opacity: 0, duration: 0.1 }, 3)
      .fromTo(
        logo.current,
        { scale: 0.3, transformOrigin: "50%" },
        { scale: 0.24, duration: 3, ease: "none" },
        3
      )
      .fromTo(
        [p0.current, p1.current, p2.current, p3.current],
        { attr: { "stroke-width": 0 } },
        { attr: { "stroke-width": 40 }, duration: 0.3 },
        3
      )
      .from(
        p0.current.children,
        {
          duration: 1,
          stagger: 0.1,
          ease: "power1",
          drawSVG: (i: any) => [0, "100% 100%"][i],
        },
        3
      )
      .from(
        p1.current.children,
        {
          duration: 1,
          stagger: 0.1,
          ease: "power1.inOut",
          drawSVG: (i: any) => [0, "100% 100%"][i],
        },
        3.05
      )
      .from(
        p2.current.children,
        {
          duration: 1,
          stagger: 0.1,
          ease: "power1.inOut",
          drawSVG: (i: any) => [0, "100% 100%"][i],
        },
        3.1
      )
      .from(
        p3.current.children,
        {
          duration: 0.8,
          stagger: 0.1,
          ease: "none",
          drawSVG: (i: any) => [0, "100% 100%"][i],
        },
        3.3
      )
      .to(logo.current, { opacity: 0, ease: "power1.inOut" }, 5);
    
    
  }, []);
  return (
    <svg
      ref={tl}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1386 796"
      fill="#fff"
      strokeLinecap="round"
      opacity={0}
    >
      <rect ref={rect1} className="rect1" width="100%" height="100%" />
      <rect
        ref={rect2}
        className="rect2"
        width="100%"
        height="100%"
        fill="#000"
      />
      <rect ref={rect3} className="rect3" width="100%" height="100%" />
      <g mask="url(#mTxt)">
        <g ref={txt1} className="txt1" fill="#000">
          <path d="M579.4,434.3c-21.3,0-37.1-16.4-37.1-37.2v-0.2c0-20.6,15.5-37.4,37.8-37.4c13.7,0,21.8,4.6,28.5,11.2l-10.1,11.7 c-5.6-5.1-11.3-8.2-18.5-8.2c-12.2,0-21,10.1-21,22.5v0.2c0,12.4,8.6,22.8,21,22.8c8.3,0,13.3-3.3,19-8.5l10.1,10.2 C601.7,429.3,593.4,434.3,579.4,434.3z" />
          <path d="M654.9,434.3c-22.3,0-38.4-16.7-38.4-37.2v-0.2c0-20.6,16.2-37.4,38.6-37.4c22.3,0,38.4,16.7,38.4,37.2v0.2 C693.5,417.4,677.3,434.3,654.9,434.3z M676.9,396.8c0-12.4-9.1-22.8-21.9-22.8c-12.8,0-21.7,10.1-21.7,22.5v0.2 c0,12.4,9.1,22.8,21.9,22.8c12.8,0,21.7-10.1,21.7-22.5V396.8z" />
          <path d="M735.9,433h-28.2v-72.4h28.2c22.8,0,38.5,15.6,38.5,36v0.2C774.4,417.2,758.7,433,735.9,433z M757.8,396.8 c0-12.8-8.8-21.8-21.8-21.8h-12.3v43.7h12.3c13,0,21.8-8.8,21.8-21.6V396.8z" />
          <path d="M788.6,433v-72.4h54.6v14.2h-38.8v14.7h34.1v14.2h-34.1v15.2h39.3V433H788.6z" />
        </g>
        <g ref={txt2} className="txt2">
          <path d="M520.4,433h-28.2v-72.4h28.2c22.8,0,38.5,15.6,38.5,36v0.2C558.9,417.2,543.2,433,520.4,433z M542.3,396.8 c0-12.8-8.8-21.8-21.8-21.8h-12.3v43.7h12.3c13,0,21.8-8.8,21.8-21.6V396.8z" />
          <path d="M617,433l-15.5-23.2H589V433h-15.9v-72.4h33.1c17.1,0,27.3,9,27.3,23.9v0.2c0,11.7-6.3,19-15.5,22.4l17.7,25.9H617z M617.3,385.3c0-6.8-4.8-10.3-12.5-10.3H589v20.8h16.1c7.8,0,12.2-4.1,12.2-10.2V385.3z" />
          <path d="M648.6,433v-72.4h15.9V433H648.6z" />
          <path d="M719.7,433.5h-14.1l-29.3-72.9H694l18.9,51l18.9-51H749L719.7,433.5z" />
          <path d="M760.2,433v-72.4h54.6v14.2H776v14.7h34.1v14.2H776v15.2h39.3V433H760.2z" />
          <path d="M880.3,433l-35.1-46v46h-15.7v-72.4h14.7l33.9,44.6v-44.6h15.7V433H880.3z" />
        </g>
        <g ref={txt3} className="txt3" fill="#000">
          <path d="m439.7 433-6.6-16.2h-30.6l-6.6 16.2h-16.2l31-72.9h14.7l31 72.9h-16.7zm-21.9-53.8-9.6 23.5h19.2l-9.6-23.5z" />
          <path d="m518.3 433-35.1-46v46h-15.7v-72.4h14.7l33.9 44.6v-44.6h15.7V433h-13.5z" />
          <path d="M550 433v-72.4h15.9V433H550z" />
          <path d="M640.6 433v-47.3l-20.4 30.9h-.4L599.6 386v47H584v-72.4h17.2l19 30.6 19-30.6h17.2V433h-15.8z" />
          <path d="m727.7 433-6.6-16.2h-30.6l-6.6 16.2h-16.2l31-72.9h14.7l31 72.9h-16.7zm-22-53.8-9.6 23.5h19.2l-9.6-23.5z" />
          <path d="M779 375.3V433h-16v-57.7h-22v-14.7h60v14.7h-22z" />
          <path d="M813.9 433v-72.4h15.9V433h-15.9z" />
          <path d="M883.1 434.3c-22.3 0-38.4-16.7-38.4-37.2v-.2c0-20.6 16.2-37.4 38.6-37.4 22.3 0 38.4 16.7 38.4 37.2v.2c0 20.5-16.3 37.4-38.6 37.4zm21.9-37.5c0-12.4-9.1-22.8-21.9-22.8-12.8 0-21.7 10.1-21.7 22.5v.2c0 12.4 9.1 22.8 21.9 22.8 12.8 0 21.7-10.1 21.7-22.5v-.2z" />
          <path d="m986.6 433-35.1-46v46h-15.7v-72.4h14.7l33.9 44.6v-44.6h15.7V433h-13.5z" />
        </g>
      </g>
      <g ref={logo} className="logo" fill="none" mask="url(#m)">
        <g ref={p0} className="p0" stroke="#222">
          <path d="M487.5 212.8c-29.7-17.6-65-26.9-102.1-26.9-112.3 0-204.2 91-204.2 204.2 0 112.3 91 204.2 204.2 204.2 112.3 0 194.9-110.5 246-230.2 55.7-130 132.7-204.2 132.7-204.2 63.1-63.1 145.7-95.6 227.4-95.6 83.5 0 168 31.6 232.1 94.7 127.2 127.2 127.2 332.3 0 459.5s-332.3 127.2-459.5 0c-25.1-25.1-42.7-50.1-57.5-79.8" />
          <path
            ref={p1}
            className="p1"
            stroke="#222"
            d="M781 397c12.1 72.4 44.4 111 69.5 136 79.8 79.8 208.8 79.8 288.7 0s79.8-208.8 0-288.7-208.8-79.8-288.7 0c-38.1 38.1-66.8 76.1-119.7 193.1C677 555.3 616.6 617.5 616.6 617.5 557.2 676.9 475.5 714 385.4 714 206.3 714 60.6 568.3 60.6 389.2S206.3 64.3 385.4 64.3c59.4 0 116 15.8 163.4 44.6"
          />
        </g>
        <g ref={p1} className="p1" stroke="#a00">
          <path d="M487.5 212.8c-29.7-17.6-65-26.9-102.1-26.9-112.3 0-204.2 91-204.2 204.2 0 112.3 91 204.2 204.2 204.2 112.3 0 194.9-110.5 246-230.2 55.7-130 132.7-204.2 132.7-204.2 63.1-63.1 145.7-95.6 227.4-95.6 83.5 0 168 31.6 232.1 94.7 127.2 127.2 127.2 332.3 0 459.5s-332.3 127.2-459.5 0c-25.1-25.1-42.7-50.1-57.5-79.8" />
          <path d="M781 397c12.1 72.4 44.4 111 69.5 136 79.8 79.8 208.8 79.8 288.7 0s79.8-208.8 0-288.7-208.8-79.8-288.7 0c-38.1 38.1-66.8 76.1-119.7 193.1C677 555.3 616.6 617.5 616.6 617.5 557.2 676.9 475.5 714 385.4 714 206.3 714 60.6 568.3 60.6 389.2S206.3 64.3 385.4 64.3c59.4 0 116 15.8 163.4 44.6" />
        </g>
        <g ref={p2} className="p2" stroke="#fc2">
          <path d="M487.5 212.8c-29.7-17.6-65-26.9-102.1-26.9-112.3 0-204.2 91-204.2 204.2 0 112.3 91 204.2 204.2 204.2 112.3 0 194.9-110.5 246-230.2 55.7-130 132.7-204.2 132.7-204.2 63.1-63.1 145.7-95.6 227.4-95.6 83.5 0 168 31.6 232.1 94.7 127.2 127.2 127.2 332.3 0 459.5s-332.3 127.2-459.5 0c-25.1-25.1-42.7-50.1-57.5-79.8" />
          <path d="M781 397c12.1 72.4 44.4 111 69.5 136 79.8 79.8 208.8 79.8 288.7 0s79.8-208.8 0-288.7-208.8-79.8-288.7 0c-38.1 38.1-66.8 76.1-119.7 193.1C677 555.3 616.6 617.5 616.6 617.5 557.2 676.9 475.5 714 385.4 714 206.3 714 60.6 568.3 60.6 389.2S206.3 64.3 385.4 64.3c59.4 0 116 15.8 163.4 44.6" />
        </g>
        <g ref={p3} className="p3" stroke="#fff">
          <path d="M487.5 212.8c-29.7-17.6-65-26.9-102.1-26.9-112.3 0-204.2 91-204.2 204.2 0 112.3 91 204.2 204.2 204.2 112.3 0 194.9-110.5 246-230.2 55.7-130 132.7-204.2 132.7-204.2 63.1-63.1 145.7-95.6 227.4-95.6 83.5 0 168 31.6 232.1 94.7 127.2 127.2 127.2 332.3 0 459.5s-332.3 127.2-459.5 0c-25.1-25.1-42.7-50.1-57.5-79.8" />
          <path d="M781 397c12.1 72.4 44.4 111 69.5 136 79.8 79.8 208.8 79.8 288.7 0s79.8-208.8 0-288.7-208.8-79.8-288.7 0c-38.1 38.1-66.8 76.1-119.7 193.1C677 555.3 616.6 617.5 616.6 617.5 557.2 676.9 475.5 714 385.4 714 206.3 714 60.6 568.3 60.6 389.2S206.3 64.3 385.4 64.3c59.4 0 116 15.8 163.4 44.6" />
        </g>
      </g>
      <linearGradient
        id="grad"
        gradientUnits="userSpaceOnUse"
        x1="779.1423"
        y1="232.832"
        x2="946.3748"
        y2="232.832"
        gradientTransform="matrix(-0.8607 -0.5091 1.5233 -2.5756 1195.6852 1555.2294)"
      >
        <stop offset="0.15" stopColor="#fff" />
        <stop offset={1} stopColor="#000" />
      </linearGradient>
      <mask id="m">
        <rect width="100%" height="100%" fill="#fff" />
        <path
          fill="url(#grad)"
          d="M832.5,295l129.6,72.4L778.8,736.2c0,0-93-176.2-88.3-183.2s45.3-77.5,76.5-145C804,328,832.5,295,832.5,295z"
        />
      </mask>
      <mask id="mTxt">
        <rect width={1386} height={435} fill="#fff" />
      </mask>
    </svg>
  );
};

export default InitialAnimation;
