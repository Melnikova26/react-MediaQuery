import React, { ReactNode } from "react";
interface IMediaQueryProps {
  orientation: string;
  minResolution: `${number}dppx` | number;
  maxResolution: `${number}dppx` | number;
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
  children: ReactNode | ((matches: boolean) => ReactNode);
}

export const MediaQuery: React.FC<Partial<IMediaQueryProps>> = ({
  orientation,
  minResolution,
  maxResolution,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  children,
}) => {
  const mediaQueryArray: string[] = [];
  if (orientation) {
    mediaQueryArray.push(`(orientation: ${orientation})`);
  }
  if (minResolution) {
    if (typeof minResolution === "string") {
      mediaQueryArray.push(`(min-resolution: ${minResolution})`);
    } else {
      mediaQueryArray.push(`(min-resolution: ${minResolution})dppx`);
    }
  }
  if (maxResolution) {
    if (typeof maxResolution === "string") {
      mediaQueryArray.push(`(max-resolution: ${maxResolution})`);
    } else {
      mediaQueryArray.push(`(max-resolution: ${maxResolution})dppx`);
    }
  }
  if (minWidth) {
    mediaQueryArray.push(`(min-width: ${minWidth}px)`);
  }
  if (maxWidth) {
    mediaQueryArray.push(`(max-width: ${maxWidth}px)`);
  }
  if (minHeight) {
    mediaQueryArray.push(`(min-height: ${minHeight}px)`);
  }
  if (maxHeight) {
    mediaQueryArray.push(`(max-height: ${maxHeight}px)`);
  }

  if (typeof children === "function") {
    return children(window?.matchMedia(mediaQueryArray.join(" and ")).matches);
  } else {
    return window?.matchMedia(mediaQueryArray.join(" and ")).matches
      ? children
      : null;
  }
};
