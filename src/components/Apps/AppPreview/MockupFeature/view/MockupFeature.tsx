import { useEffect, useState, useRef } from "react";
import { InfoElement } from "../../../../Common/InfoElement/InfoElement";
import { motion } from 'framer-motion';
import "./MockupFeature.css";
import { MockupFeatureProps } from "../model/MockupFeatureProps";

export function MockupFeature({
  mockupFeatureProps,
}: {
  mockupFeatureProps: MockupFeatureProps;
}) {
  const { image, title, subtitle, description, alignment, softwareTarget } = mockupFeatureProps;
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = () => {
    const element = ref.current;
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0 && !hasAnimated) {
        setHasAnimated(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasAnimated]);

  const mockupImageClass = isMobile
    ? (softwareTarget === "macOS" ? "macMobile" : "mockupImage") 
    : "mockupImage";

  const imageDelay = alignment === "left" ? 0 : 0.2; // Left first, right second
  const textDelay = alignment === "left" ? 0.2 : 0; // Text follows the image

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 30 }}
      transition={{ duration: 0.75, delay: 0.1 }}
      className="mockupBox"
    >
      {alignment === "left" || isMobile ? (
        <motion.img
          className={mockupImageClass}
          src={image}
          alt={title}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : -30 }}
          transition={{ duration: 0.75, delay: imageDelay }}
        />
      ) : null}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: hasAnimated ? 1 : 0, y: hasAnimated ? 0 : 30 }}
        transition={{ duration: 0.75, delay: textDelay }}
      >
        <InfoElement
          title={title}
          longTitle={subtitle}
          description={description}
          textAlign="left"
        />
      </motion.div>

      {alignment === "right" ? (
        <motion.img
          className={`mockupImage right`}
          src={image}
          alt={title}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: hasAnimated ? 1 : 0, x: hasAnimated ? 0 : 30 }}
          transition={{ duration: 0.75, delay: imageDelay }}
        />
      ) : null}
    </motion.div>
  );
}