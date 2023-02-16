import { FC, ReactNode } from "react";
import { M_PLUS_1p } from "@next/font/google";

const M_PLUS_1p_normal = M_PLUS_1p({
    weight: "400",
    preload: false,
});

const Fonts: FC<{ children: ReactNode }> = ({ children }) => (
    <>
        {children}
        <style jsx global>{`
        html {
         font-family: ${M_PLUS_1p_normal.style.fontFamily};
       }
     `}</style>
    </>
);

export default Fonts;