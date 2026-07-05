import React, { useEffect, useRef } from "react";
import { counterItems } from "../constants/index.js";
import gsap from "gsap";

const AnimatedCounter = () => {
  const counterRefs = useRef([]);

  useEffect(() => {
    counterRefs.current.forEach((el, index) => {
      const item = counterItems[index];
      const obj = { value: 0 };

      gsap.to(obj, {
        value: item.value,
        duration: 2,
        ease: "power2.out",
        onUpdate: () => {
          if (el) {
            el.textContent = `${Math.floor(obj.value)}${item.suffix}`;
          }
        },
      });
    });
  }, []);

  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div
              ref={(el) => (counterRefs.current[index] = el)}
              className="counter-number text-white text-5xl font-bold mb-2"
            >
              0{item.suffix}
            </div>

            <div className="text-white-50 text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;