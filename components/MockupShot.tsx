import Image from "next/image";
import { MOCKUP_SRC } from "@/lib/site";

export type MockupCrop = "full" | "writing" | "world" | "ai" | "chrome";

const CROP_CLASS: Record<MockupCrop, string> = {
  full: "object-contain object-center",
  writing: "h-full w-full origin-[50%_58%] scale-[1.55] object-cover object-[50%_58%]",
  world: "h-full w-full origin-[6%_36%] scale-[1.85] object-cover object-[6%_36%]",
  ai: "h-full w-full origin-[96%_28%] scale-[1.9] object-cover object-[96%_28%]",
  chrome: "h-full w-full origin-top scale-[1.2] object-cover object-[50%_0%]",
};

const CROP_ASPECT: Record<MockupCrop, string> = {
  full: "aspect-[2752/1152]",
  writing: "aspect-[16/10]",
  world: "aspect-[4/3]",
  ai: "aspect-[4/3]",
  chrome: "aspect-[21/9]",
};

export function MockupShot({
  crop = "full",
  alt = "Mythos Writer design mockup — story editor with vault navigator and agent sidebar",
  priority = false,
  className,
}: {
  crop?: MockupCrop;
  alt?: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={["overflow-hidden bg-desk", CROP_ASPECT[crop], className ?? ""].join(" ")}>
      <Image
        src={MOCKUP_SRC}
        alt={alt}
        width={2752}
        height={1152}
        priority={priority}
        className={CROP_CLASS[crop]}
      />
    </div>
  );
}
