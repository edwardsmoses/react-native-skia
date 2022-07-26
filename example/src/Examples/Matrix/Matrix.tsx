import {
  BlurMask,
  Canvas,
  Fill,
  Group,
  useClockValue,
  useComputedArrayValue,
  useComputedValue,
  useFont,
  vec,
} from "@shopify/react-native-skia";
import React, { useMemo } from "react";
import { useWindowDimensions } from "react-native";

import { COLS, ROWS, Symbol } from "./Symbol";

const cols = new Array(COLS).fill(0).map((_, i) => i);
const rows = new Array(ROWS).fill(0).map((_, i) => i);

const randomArray = (from: number, to: number, blank?: boolean) => {
  const size = Math.round(from + Math.random() * (to - from));
  const a = new Array(size).fill(0).map((_, i) => (blank ? 0 : i / size));
  return a.reverse();
};

const streams = cols.map(() =>
  new Array(3)
    .fill(0)
    .map(() => [
      ...randomArray(1, 4, true),
      ...randomArray(4, 16),
      ...randomArray(2, 8, true),
    ])
    .flat()
);

const pos = vec(0, 0);

export const Matrix = () => {
  const clock = useClockValue();
  const { width, height } = useWindowDimensions();
  const symbol = { width: width / COLS, height: height / ROWS };
  const font = useFont(require("./matrix-code-nfi.otf"), symbol.height);

  const symbols = useMemo(
    () => (font ? font.getGlyphIDs("abcdefghijklmnopqrstuvwxyz") : undefined),
    [font]
  );

  // Calculate the static data
  const items = useMemo(
    () =>
      cols
        .map((_c, ci) =>
          rows.map((_r, ri) => ({
            offset: Math.round(Math.random() * (26 - 1)),
            range: 100 + Math.random() * 900,
            stream: streams[ci],
            i: ci,
            j: ri,
          }))
        )
        .flat(),
    []
  );

  // Calculate the animated data
  const glyphs = useComputedArrayValue(
    () =>
      symbols
        ? items.map(({ range, offset }) => {
            const idx = offset + Math.floor(clock.current / range);
            return [{ id: symbols[idx % symbols.length], pos }];
          })
        : [],
    [clock, symbols, items]
  );

  const jdxs = useComputedValue(
    () => items.map(() => Math.round(clock.current / 100)),
    [clock, items]
  );

  const colors = useComputedArrayValue(
    () =>
      items.map(({ stream, j }, index) => {
        const opacity =
          stream[(stream.length - j + jdxs.current[index]) % stream.length];
        return new Float32Array([0, 1, 70 / 255, opacity]);
      }),
    [items, jdxs]
  );

  const opacities = useComputedArrayValue(
    () =>
      items.map(
        ({ stream, j }, index) =>
          stream[(stream.length - j + jdxs.current[index]) % stream.length]
      ),
    [items, jdxs]
  );

  return symbols && font ? (
    <Canvas style={{ flex: 1, marginTop: 40 }} debug>
      <Fill color="black" />
      <Group>
        <BlurMask blur={8} style="solid" />
        {cols.map((_i, i) =>
          rows.map((_j, j) => (
            <Symbol
              font={font}
              key={`${i}-${j}`}
              i={i}
              j={j}
              symbol={symbol}
              glyphs={glyphs}
              colors={colors}
              opacities={opacities}
            />
          ))
        )}
      </Group>
    </Canvas>
  ) : null;
};
