import * as React from "react";
import {
  floatLeft,
  w,
  h,
  mr,
  mb,
  inlineBlock,
  clearFix,
} from "@borderlesslabs/atoms";
import { Spinner } from "../Spinner";
import { Box } from "../Box";
import { Paragraph } from "../Text";
import { LoadingText, loadingStyle } from "../Loading";

export default {
  title: "Loading",
};

export const spinner = () => <Spinner />;

export const placeholder = () => (
  <Paragraph css={[clearFix]}>
    <Box
      css={[inlineBlock, floatLeft, w[12], h[12], mr[3], mb[3], loadingStyle]}
    />
    <LoadingText css={[loadingStyle, { width: "50%" }]} />
    <br />
    <LoadingText css={[loadingStyle, { width: "20%" }]} />
    <br />
    <LoadingText css={[loadingStyle, { width: "60%" }]} />
    <br />
    <LoadingText css={[loadingStyle, { width: "30%" }]} />
  </Paragraph>
);
