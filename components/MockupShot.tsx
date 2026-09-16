import Image from "next/image";
import { MOCKUP_SRC } from "@/lib/site";

export type MockupCrop = "full" | "writing" | "world" | "ai" | "chrome";

const CROP_CLASS: Record<MockupCrop, string> = {
  full: "object-contain object-center",
  writing: "object-cover object-[48%_62%]",
  world: "object-cover object-[6%_42%]",
  ai: "object-cover object-[96%_38%]",
  chrome: "object-cover object-[50%_0%]",
};

const CROP_ASPECT: Record<MockupCrop, string> = {
  full: "aspect-[2752/1152]",
  writing: "aspect-[16/10]",
  world: "aspect-[16/10]",
  ai: "aspect-[16/10]",
  chrome: "aspect-[21/8]",
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
    <Image
      src={MOCKUP_SRC}
      alt={alt}
      width={2752}
      height={1152}
      priority={priority}
      className={[
        "h-auto w-full bg-desk",
        CROP_ASPECT[crop],
        CROP_CLASS[crop],
        className ?? "",
      ].join(" ")}
    />
  );
}
