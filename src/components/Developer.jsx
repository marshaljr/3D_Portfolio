import React, { useEffect, useRef, useMemo } from "react";
import { useGraph } from "@react-three/fiber";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import { SkeletonUtils } from "three-stdlib";

const Developer = ({ animationName = "idle", ...props }) => {
  const group = useRef();

  const { scene } = useGLTF("/models/animations/Developer.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations: idleAnimation } = useFBX("/models/animations/Idle.fbx");
  const { animations: saluteAnimation } = useFBX(
    "/models/animations/Salute.fbx"
  );
  const { animations: clappingAnimation } = useFBX(
    "/models/animations/Clapping.fbx"
  );
  const { animations: victoryAnimation } = useFBX(
    "/models/animations/Victory.fbx"
  );
  const { animations: pointingAnimation } = useFBX(
    "/models/animations/Pointing.fbx"
  );
  const { animations: sittingclapAnimation } = useFBX(
    "/models/animations/SittingClap.fbx"
  );
  const { animations: magicAnimation } = useFBX(
    "/models/animations/MagicAttack.fbx"
  );
  const { animations: strongAnimation } = useFBX(
    "/models/animations/Strong.fbx"
  );
  const { animations: grabAnimation } = useFBX("/models/animations/Grab.fbx");
  const { animations: runningAnimation } = useFBX(
    "/models/animations/Running.fbx"
  );
  const { animations: tauntAnimation } = useFBX("/models/animations/Taunt.fbx");

  // useMemo(() => {
  //   if (idleAnimation[0]) idleAnimation[0].name = "idle";
  //   if (saluteAnimation[0]) saluteAnimation[0].name = "salute";
  //   if (clappingAnimation[0]) clappingAnimation[0].name = "clapping";
  //   if (victoryAnimation[0]) victoryAnimation[0].name = "victory";
  //   if (breakdanceAnimation[0]) breakdanceAnimation[0].name = "breakdance";
  // }, [
  //   idleAnimation,
  //   saluteAnimation,
  //   clappingAnimation,
  //   victoryAnimation,
  //   breakdanceAnimation,
  // ]);

  // Normalize into a single map
  const animations = useMemo(
    () => ({
      idle: idleAnimation[0],
      salute: saluteAnimation[0],
      clapping: clappingAnimation[0],
      victory: victoryAnimation[0],
      pointing: pointingAnimation[0],
      sitting: sittingclapAnimation[0],
      magic: magicAnimation[0],
      strong: strongAnimation[0],
      grab: grabAnimation[0],
      running: runningAnimation[0],
      taunt: tauntAnimation[0],
    }),
    [
      idleAnimation,
      saluteAnimation,
      clappingAnimation,
      victoryAnimation,
      pointingAnimation,
      sittingclapAnimation,
      magicAnimation,
      strongAnimation,
      grabAnimation,
      runningAnimation,
      tauntAnimation,
    ]
  );

  useEffect(() => {
    Object.entries(animations).forEach(([name, clip]) => {
      if (!clip) return;

      clip.name = name;

      clip.tracks = clip.tracks.filter(
        (track) =>
          !track.name.includes("Hips.position") &&
          !track.name.includes("Hips.quaternion") &&
          !track.name.includes("Armature")
      );
    });
  }, [animations]);

  const { actions } = useAnimations(Object.values(animations), group);

  useEffect(() => {
    if (!actions || !actions[animationName]) return;
    actions[animationName].reset().fadeIn(0.5).play();
    return () => actions[animationName]?.fadeOut(0.5);
  }, [animationName, actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={clone} />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Glasses.geometry}
        material={materials.Wolf3D_Glasses}
        skeleton={nodes.Wolf3D_Glasses.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
    </group>
  );
};

useGLTF.preload("/models/animations/Developer.glb");

export default Developer;
