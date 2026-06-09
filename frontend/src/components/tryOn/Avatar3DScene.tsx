import { ContactShadows, OrbitControls, RoundedBox, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Color, Group, SRGBColorSpace, Texture } from "three";
import type { TryOnStatus } from "./MannequinPreview";

type Avatar3DSceneProps = {
  autoRotate: boolean;
  facePhotoUrl: string | null;
  pantsColor: string;
  shirtColor: string;
  status: TryOnStatus;
};

type AvatarFigureProps = Omit<Avatar3DSceneProps, "autoRotate">;

const FacePhoto = ({ url }: { url: string }) => {
  const texture = useTexture(url) as Texture;

  useEffect(() => {
    texture.colorSpace = SRGBColorSpace;
    texture.needsUpdate = true;
  }, [texture]);

  return (
    <mesh position={[0, 2.28, 0.505]}>
      <circleGeometry args={[0.41, 64]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};

const DefaultFace = () => (
  <group position={[0, 2.28, 0.49]}>
    <mesh position={[-0.17, 0.08, 0]}>
      <sphereGeometry args={[0.038, 18, 18]} />
      <meshStandardMaterial color="#27372d" />
    </mesh>
    <mesh position={[0.17, 0.08, 0]}>
      <sphereGeometry args={[0.038, 18, 18]} />
      <meshStandardMaterial color="#27372d" />
    </mesh>
    <mesh position={[0, -0.17, 0]} scale={[1.6, 0.35, 0.4]}>
      <sphereGeometry args={[0.09, 20, 20]} />
      <meshStandardMaterial color="#b8756d" />
    </mesh>
  </group>
);

const AvatarFigure = ({ facePhotoUrl, pantsColor, shirtColor, status }: AvatarFigureProps) => {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const movement = status === "generating" ? Math.sin(clock.elapsedTime * 4) * 0.035 : 0;
    groupRef.current.position.y = movement;
  });

  const skinColor = new Color("#e8c9aa");

  return (
    <group ref={groupRef} position={[0, -0.18, 0]}>
      <mesh castShadow position={[0, 2.28, 0]}>
        <sphereGeometry args={[0.53, 48, 48]} />
        <meshStandardMaterial color={skinColor} roughness={0.75} />
      </mesh>
      {facePhotoUrl ? <FacePhoto url={facePhotoUrl} /> : <DefaultFace />}

      <mesh castShadow position={[0, 1.72, 0]}>
        <cylinderGeometry args={[0.2, 0.23, 0.36, 32]} />
        <meshStandardMaterial color={skinColor} roughness={0.75} />
      </mesh>

      <RoundedBox args={[1.66, 1.42, 0.68]} castShadow position={[0, 0.94, 0]} radius={0.3} smoothness={6}>
        <meshStandardMaterial color={shirtColor} roughness={0.86} />
      </RoundedBox>
      <mesh castShadow position={[0, 1.54, 0.355]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.38, 0.38, 0.035]} />
        <meshStandardMaterial color="#e5dfcf" />
      </mesh>
      <mesh castShadow position={[0, 0.92, 0.355]}>
        <boxGeometry args={[0.035, 1.1, 0.035]} />
        <meshStandardMaterial color="#d7cfbd" />
      </mesh>

      <mesh castShadow position={[-1.02, 0.96, 0]} rotation={[0, 0, -0.18]}>
        <capsuleGeometry args={[0.21, 0.93, 12, 24]} />
        <meshStandardMaterial color={shirtColor} roughness={0.86} />
      </mesh>
      <mesh castShadow position={[1.02, 0.96, 0]} rotation={[0, 0, 0.18]}>
        <capsuleGeometry args={[0.21, 0.93, 12, 24]} />
        <meshStandardMaterial color={shirtColor} roughness={0.86} />
      </mesh>
      <mesh castShadow position={[-1.14, 0.28, 0]}>
        <sphereGeometry args={[0.23, 28, 28]} />
        <meshStandardMaterial color={skinColor} roughness={0.75} />
      </mesh>
      <mesh castShadow position={[1.14, 0.28, 0]}>
        <sphereGeometry args={[0.23, 28, 28]} />
        <meshStandardMaterial color={skinColor} roughness={0.75} />
      </mesh>

      <RoundedBox args={[0.78, 1.82, 0.68]} castShadow position={[-0.43, -0.72, 0]} radius={0.18} smoothness={5}>
        <meshStandardMaterial color={pantsColor} roughness={0.82} />
      </RoundedBox>
      <RoundedBox args={[0.78, 1.82, 0.68]} castShadow position={[0.43, -0.72, 0]} radius={0.18} smoothness={5}>
        <meshStandardMaterial color={pantsColor} roughness={0.82} />
      </RoundedBox>

      <RoundedBox args={[0.82, 0.32, 1.18]} castShadow position={[-0.43, -1.75, 0.23]} radius={0.18} smoothness={5}>
        <meshStandardMaterial color="#171b18" roughness={0.62} />
      </RoundedBox>
      <RoundedBox args={[0.82, 0.32, 1.18]} castShadow position={[0.43, -1.75, 0.23]} radius={0.18} smoothness={5}>
        <meshStandardMaterial color="#171b18" roughness={0.62} />
      </RoundedBox>
    </group>
  );
};

const Avatar3DScene = ({ autoRotate, facePhotoUrl, pantsColor, shirtColor, status }: Avatar3DSceneProps) => (
  <div className="avatar-canvas" data-testid="avatar-3d-canvas">
    <Canvas
      camera={{ fov: 34, position: [0, 0.35, 7.1] }}
      dpr={[1, 1.6]}
      gl={{ alpha: true, antialias: true, preserveDrawingBuffer: true }}
      shadows
    >
      <ambientLight intensity={1.65} />
      <directionalLight castShadow intensity={2.2} position={[3, 5, 5]} shadow-mapSize-height={1024} shadow-mapSize-width={1024} />
      <directionalLight color="#dcebd2" intensity={1.3} position={[-4, 2, 2]} />
      <AvatarFigure facePhotoUrl={facePhotoUrl} pantsColor={pantsColor} shirtColor={shirtColor} status={status} />
      <ContactShadows blur={2.5} far={5} opacity={0.25} position={[0, -2.08, 0]} scale={5.5} />
      <OrbitControls
        autoRotate={autoRotate}
        autoRotateSpeed={1.5}
        enablePan={false}
        maxDistance={9}
        maxPolarAngle={Math.PI / 1.68}
        minDistance={5.4}
        minPolarAngle={Math.PI / 2.65}
        target={[0, 0.25, 0]}
      />
    </Canvas>
  </div>
);

export default Avatar3DScene;
