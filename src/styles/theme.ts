import { extendTheme } from "@chakra-ui/react";

const variantOutlined = () => ({
  field: {
    _focus: {
      borderColor: "rosaxoq",
      boxShadow: "0 0 0 1px rosaxoq",
    },
  },
});

const variantFilled = () => ({
  field: {
    _focus: {
      borderColor: "rosaxoq",
      boxShadow: "0 0 0 1px rosaxoq",
    },
  },
});

const variantFlushed = () => ({
  field: {
    _focus: {
      borderColor: "rosaxoq",
      boxShadow: "0 1px 0 0 rosaxoq",
    },
  },
});

export const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: false,
  fonts: {
    heading: "Roboto",
    body: "Roboto",
    // heading: "CaviarDreams",
    // body: "CaviarDreams",
  },
  colors: {
    rosaxoq: "#ff00ff",
  },
  shadows: {
    outline: "0 0 0 1px #ff00ff",
  },
  components: {
    Button: {
      baseStyle: {
        _hover: {
          // textDecoration: "underline",
        },
        // _focus: { outlineColor: "rosaxoq", borderColor: "rosaxoq" },
      },
    },
    Input: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
    Select: {
      variants: {
        outline: variantOutlined,
        filled: variantFilled,
        flushed: variantFlushed,
      },
    },
  },
  styles: {
    global: {
      // svg: {
      //   display: "inline",
      //   lineHeight: "1",
      // },
      a: {
        _hover: {
          //textDecoration: "underline",
        },
      },
      body: {
        /* bg: "var(--white)",
        color: "var(--white)",
        lineHeight: "inherit", */
      },
      button:{
        // _focus: { outlineColor: "#00000011" },
      }
    },
  },
});
