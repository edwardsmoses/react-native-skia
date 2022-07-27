import React from "react";
import type {
  AnimatedProp,
  Color,
  Glyph,
  SkFont,
} from "@shopify/react-native-skia";
import { Glyphs } from "@shopify/react-native-skia";

interface SymbolProps {
  i: number;
  j: number;
  font: SkFont;
  symbol: { width: number; height: number };
  glyphs: AnimatedProp<Glyph[]>;
  color: AnimatedProp<Color>;
}

export const Symbol = ({ i, j, font, symbol, glyphs, color }: SymbolProps) => {
  return (
    <Glyphs
      x={i * symbol.width}
      y={j * symbol.height}
      font={font}
      glyphs={glyphs}
      color={color}
    />
  );
};
