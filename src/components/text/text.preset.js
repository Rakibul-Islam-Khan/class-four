import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";

const BASE = {
  fontFamily: typography.secondary,
  fontSize: 16,
  color: colors.white,
};

const BASE_BOLD = {
    fontFamily: typography.secondaryBold,
    fontSize: 16,
    color: colors.white,
}
const BOLD = {
    fontFamily: typography.primary,
    color: colors.white,
}
export const presets = {
    default: BASE,
    bold : BOLD,
    h1 : {
        ...BOLD,
        fontSize: 32,
    },
    h2 : {
        ...BOLD,
        fontSize: 28,
    },
    h3 : {
        ...BASE_BOLD,
        fontSize: 24,
    },
    h4 : {
        ...BASE_BOLD,
        fontSize: 16,
    },
    h5 : {
        ...BASE,
        fontSize: 12,
    },

}