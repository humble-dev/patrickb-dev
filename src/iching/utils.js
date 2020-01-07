import React from "react";
import { coloredsticks as COLORED_STICKS } from "./probability";
import { hexagrams as HEXAGRAMS } from "./hexagrams";

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

export const coloredSticksMethod = () => {
  const pile = shuffle(COLORED_STICKS);
  let lines = [];

  for (let i = 0; i < 6; i++) {
    lines.push(pile.pop());
  }

  return lines;
};

export const generateStaticLines = linesDynamic => {
  let linesStatic = [];
  for (let i = 0; i < 6; i++) {
    if (linesDynamic[i] === 6) linesStatic.push(8);
    else if (linesDynamic[i] === 9) linesStatic.push(7);
    else linesStatic.push(linesDynamic[i]);
  }
  return linesStatic;
};

export const generateSecondHex = linesDynamic => {
  let secondHex = [];
  for (let i = 0; i < 6; i++) {
    if (linesDynamic[i] === 6) secondHex.push(7);
    else if (linesDynamic[i] === 9) secondHex.push(8);
    else secondHex.push(linesDynamic[i]);
  }
  return secondHex;
};

export const generateNotation = (hex1number, linesDynamic, hex2number) => {
  let linesDoChange = false;
  let changingLines = [];
  // Parse dynamic lines
  for (let i = 0; i < 6; i++) {
    // If line is changing, push index
    if (linesDynamic[i] === 6 || linesDynamic[i] === 9) changingLines.push(i);
  }
  // if there are any changing lines...
  if (changingLines.length > 0) linesDoChange = true;

  let linesString = "";
  if (linesDoChange) linesString = changingLines.join();

  let notation = "" + hex1number;
  if (linesDoChange) notation += ": " + linesString + " => " + hex2number;

  return notation;
};

export const generateResult = () => {
  return coloredSticksMethod();
};

export const linesChange = lines => {
  for (let i = 0; i < 6; i++) {
    if (lines[i] === 6 || lines[i] === 9) return true;
  }
  return false;
};

export const getChangingLines = lines => {
  let arr = [];
  for (let i = 0; i < 6; i++) {
    if (lines[i] === 6 || lines[i] === 9) arr.push(i + 1);
  }
  return arr;
};

export const getHexagramData = lines => {
  if (linesChange(lines)) lines = generateStaticLines(lines);

  return HEXAGRAMS.filter(hex =>
    hex.sequence.every((value, index) => value === lines[index])
  )[0];
};

export const lineToText = line => {
  let str = "";
  let color = "black";

  switch (line) {
    case 6:
      str = "---   ---";
      color = "red";
      break;
    case 7:
      str = "---------";
      break;
    case 8:
      str = "---   ---";
      break;
    case 9:
      str = "---------";
      color = "red";
      break;
    default:
      str = null;
  }
  return { string: str, color };
};

export const visualizeHexagram = lines => {
  return (
    <div
      style={{
        whiteSpace: "pre",
        fontFamily: "Consolas, monospace",
        lineHeight: 0.45,
        letterSpacing: -5.3,
        fontSize: 20,
        fontWeight: "bolder",
        display: "inline-block"
      }}
    >
      <div style={{ color: lineToText(lines[5]).color }}>
        {lineToText(lines[5]).string}
      </div>
      <div style={{ color: lineToText(lines[4]).color }}>
        {lineToText(lines[4]).string}
      </div>
      <div style={{ color: lineToText(lines[3]).color }}>
        {lineToText(lines[3]).string}
      </div>
      <div style={{ color: lineToText(lines[2]).color }}>
        {lineToText(lines[2]).string}
      </div>
      <div style={{ color: lineToText(lines[1]).color }}>
        {lineToText(lines[1]).string}
      </div>
      <div style={{ color: lineToText(lines[0]).color }}>
        {lineToText(lines[0]).string}
      </div>
    </div>
  );
};
