import { Center, useTexture } from "@react-three/drei";
import { useRef, useEffect, useCallback } from "react";
import gsap from "gsap";

useTexture.preload("textures/rings.png");

const Rings = ({ position }) => {
  const texture = useTexture("textures/rings.png");
  const refList = useRef([]);

  const getRef = useCallback((mesh) => {
    if (mesh && !refList.current.includes(mesh)) {
      refList.current.push(mesh);
    }
  }, []);

  useEffect(() => {
    if (refList.current.length === 0) return;

    refList.current.forEach((r) => r.position.set(...position));

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });
    tl.to(
      refList.current.map((r) => r.rotation),
      {
        y: "+=" + Math.PI * 2,
        x: "-=" + Math.PI * 2,
        duration: 2.5,
        stagger: 0.15,
      }
    );

    return () => tl.kill();
  }, [position]);

  return (
    <Center>
      <group scale={0.5}>
        {Array.from({ length: 4 }, (_, index) => (
          <mesh key={index} ref={getRef}>
            <torusGeometry args={[(index + 1) * 0.5, 0.1, 16, 100]} />
            <meshMatcapMaterial matcap={texture} toneMapped={false} />
          </mesh>
        ))}
      </group>
    </Center>
  );
};

export default Rings;
