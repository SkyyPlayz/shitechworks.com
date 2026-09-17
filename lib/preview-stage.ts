export const PREVIEW_ASPECT_FALLBACK = 16 / 9;

export function readScreenAspect(
  screen: Pick<Screen, "width" | "height" | "availWidth" | "availHeight"> | null | undefined,
): number {
  if (!screen) return PREVIEW_ASPECT_FALLBACK;
  const nativeW = screen.width;
  const nativeH = screen.height;
  if (nativeW > 0 && nativeH > 0) return nativeW / nativeH;
  const availW = screen.availWidth;
  const availH = screen.availHeight;
  if (availW > 0 && availH > 0) return availW / availH;
  return PREVIEW_ASPECT_FALLBACK;
}

export function containBox(
  stageW: number,
  stageH: number,
  aspect: number,
): { width: number; height: number } {
  if (stageW <= 0 || stageH <= 0 || aspect <= 0) {
    return { width: 0, height: 0 };
  }
  const stageAspect = stageW / stageH;
  if (stageAspect > aspect) {
    return { width: stageH * aspect, height: stageH };
  }
  return { width: stageW, height: stageW / aspect };
}

type FullscreenElement = HTMLElement & {
  webkitRequestFullscreen?: () => Promise<void> | void;
};

type FullscreenDocument = Document & {
  webkitExitFullscreen?: () => Promise<void> | void;
  webkitFullscreenElement?: Element | null;
};

export function fullscreenElement(doc: Document = document): Element | null {
  const d = doc as FullscreenDocument;
  return d.fullscreenElement ?? d.webkitFullscreenElement ?? null;
}

export async function requestElementFullscreen(el: HTMLElement): Promise<void> {
  const node = el as FullscreenElement;
  if (node.requestFullscreen) {
    await node.requestFullscreen();
    return;
  }
  if (node.webkitRequestFullscreen) {
    await node.webkitRequestFullscreen();
  }
}

export async function exitElementFullscreen(doc: Document = document): Promise<void> {
  const d = doc as FullscreenDocument;
  if (d.exitFullscreen) {
    await d.exitFullscreen();
    return;
  }
  if (d.webkitExitFullscreen) {
    await d.webkitExitFullscreen();
  }
}
