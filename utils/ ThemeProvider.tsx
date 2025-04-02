"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

interface MyThemeProviderProps extends ThemeProviderProps {
    children: React.ReactNode;
}

export default function ThemeProvider({ children, ...props }: MyThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}