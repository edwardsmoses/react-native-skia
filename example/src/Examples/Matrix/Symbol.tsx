import React from "react";
import type { SkFont, SkiaValue, SkPoint } from "@shopify/react-native-skia";
import { Glyphs } from "@shopify/react-native-skia";

export const COLS = 15;
export const ROWS = 30;

interface SymbolProps {
  i: number;
  j: number;
  font: SkFont;
  symbol: { width: number; height: number };
  glyphs: (index: number) => {
    index: number;
    value: SkiaValue<
      | {
          id: number;
          pos: SkPoint;
        }[][]
    >;
  };
  opacities: (index: number) => {
    index: number;
    value: SkiaValue<number[]>;
  };
  colors: (index: number) => {
    index: number;
    value: SkiaValue<Float32Array[]>;
  };
}

export const Symbol = ({
  i,
  j,
  font,
  symbol,
  glyphs,
  opacities,
  colors,
}: SymbolProps) => {
  const x = i * symbol.width;
  const y = j * symbol.height;
  return (
    <Glyphs
      x={x + symbol.width / 4}
      y={y + symbol.height}
      font={font}
      glyphs={glyphs(i * j)}
      opacity={opacities(i * j)}
      color={colors(i * j)}
    />
  );
};
