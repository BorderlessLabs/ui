import { styled, join, css } from "react-free-style";
import { colors, spacingConfig, fontWeightConfig } from "./config";

export const Table = styled("table", {
  borderCollapse: "collapse"
});

export const TableBody = styled("tbody");

export const TableHead = styled("thead", {
  backgroundColor: colors.gray1
});

export const TableRow = styled("tr");

export const TableHeadCell = styled("th", {
  color: colors.gray7,
  textAlign: "left",
  padding: spacingConfig[2],
  fontWeight: fontWeightConfig.semiBold
});

export const TableCell = styled("td", {
  color: colors.gray8,
  padding: spacingConfig[2],
  borderTop: `1px solid ${colors.gray3}`
});

export const borderedTable = css({
  border: `1px solid ${colors.gray3}`,
  td: {
    borderLeft: `1px solid ${colors.gray3}`,
    "&:first-child": {
      borderLeft: 0
    }
  },
  th: {
    borderLeft: `1px solid ${colors.gray3}`,
    "&:first-child": {
      borderLeft: 0
    }
  }
});
