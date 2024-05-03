import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <React.Fragment>
      <ThemeProvider defaultTheme="system" attribute="class">
        <div>{children}</div>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Providers;
