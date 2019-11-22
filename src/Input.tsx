import { styled } from "react-free-style";
import {
  nest,
  borderColor,
  borderSolid,
  appearanceNone,
  px,
  rounded,
  outlineNone,
  fontSize,
  border,
  boxBorder,
  color,
  backgroundColor,
  py,
  leading,
  flexShrink0,
  inlineBlock,
  p,
  block,
  inlineFlex,
  itemsCenter,
  pr,
  pseudoFocus,
  colorConfig,
  pseudoInvalid,
  pseudoDisabled,
  pseudoPlaceholder,
  cursorNotAllowed,
  w,
  h,
  pseudoChecked
} from "@borderlesslabs/atoms";

export const Input = styled("input", [
  appearanceNone,
  boxBorder,
  leading.normal,
  py[2],
  px[3],
  rounded.m,
  outlineNone,
  fontSize.m,
  borderSolid,
  border[1],
  borderColor.gray3,
  pseudoFocus(
    borderColor.indigo6,
    { boxShadow: `0 0 0 3px ${colorConfig.indigo2}` },
    pseudoInvalid(borderColor.red6, {
      boxShadow: `0 0 0 3px ${colorConfig.red2}`
    })
  ),
  pseudoDisabled(backgroundColor.gray1, cursorNotAllowed),
  pseudoPlaceholder(color.gray5),
  nest("&[type=radio]", "radio")(
    inlineBlock,
    p[0],
    color.indigo6,
    flexShrink0,
    rounded.full,
    w.em,
    h.em,
    pseudoChecked(borderColor.transparent, {
      backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")`,
      backgroundColor: "currentColor",
      backgroundSize: "100% 100%",
      $displayName: "radioImage"
    })
  ),
  nest("&[type=checkbox]", "checkbox")(
    inlineBlock,
    p[0],
    color.indigo6,
    flexShrink0,
    rounded.m,
    w.em,
    h.em,
    pseudoChecked(borderColor.transparent, {
      backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e")`,
      backgroundColor: "currentColor",
      backgroundSize: "100% 100%",
      $displayName: "checkboxImage"
    })
  )
]);

export const Select = styled("select", [
  Input.style,
  backgroundColor.white,
  {
    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23a0aec0'%3e%3cpath d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: `right 0.5em center`,
    backgroundSize: `1.5em 1.5em`,
    paddingRight: "2.5em",
    $displayName: "image"
  },
  nest("&[multiple]", "multiple")({ backgroundImage: "none" }, pr[3])
]);

export const Label = styled("label", [block]);

export const InlineLabel = styled("label", [inlineFlex, itemsCenter]);

export const LabelText = styled("div", [color.gray8]);
