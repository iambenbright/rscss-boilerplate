/**
 * default base theme
 * include or remove parts to suit application needs
 */

// breakpoints: 480px, 768px, 992px, 1280px
const breakpoints = ['30em', '48em', '62em', '80em'];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

// font sizes
const fontSizes = [12, 14, 16, 20, 24, 32, 48];
fontSizes.body = fontSizes[2];

// spacing: margins and paddings
// relative to broswer default fontsize = 16px
// 1px = 0.25rem : target / 4 = scale
const space = [0, 4, 8, 12, 16, 20, 24, 28];
space.none = space[0];
space.sm = space[1];
space.md = space[2];
space.lg = space[3];
space.xl = space[4];
space['2xl'] = space[5];
space['3xl'] = space[6];
space['4xl'] = space[7];

export default theme = {
  breakpoints,
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Georgia, serif',
    mono: 'Menlo, monospace',
  },
  fontSizes,
  fontWeights: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 0,
    normal: 'normal',
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: 2,
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  sizes: {
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
  },
  space,
  colors: {
    // use tailwindcss palette or generate from
    // smart-swatch [smart-swatch.netlify.app] or coolors
  },
  shadows: {},
  radii: {},
  zIndices: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
  borders: {},
  borderWidths: {},
  borderStyles: {},
};
