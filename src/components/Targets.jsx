import { useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

useGLTF.preload(
  "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
);

const Targets = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  // useGSAP(() => {
  //   gsap.to(targetRef.current.position, {
  //     y: targetRef.current.position.y + 0.5,
  //     duration: 1.5,
  //     repeat: -1,
  //     yoyo: true,
  //   });
  // });
  useEffect(() => {
    if (!targetRef.current) return;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
    });

    return () => tl.kill();
  }, []);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.5}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Targets;
