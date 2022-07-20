import React from "react";
import type { SkPicture } from "@shopify/react-native-skia";
import { useDrawCallback, SkiaView } from "@shopify/react-native-skia";

interface PictureProps {
  picture: SkPicture;
}

export const Picture = ({ picture }: PictureProps) => {
  // const width = 256;
  // const height = 256;
  const onDraw = useDrawCallback((canvas) => {
    canvas.drawPicture(picture);
  });
  return <SkiaView style={{ width: 64, height: 64 }} onDraw={onDraw} />;
};
