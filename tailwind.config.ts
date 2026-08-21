import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{js,ts,jsx,tsx}"], theme:{extend:{colors:{ink:"#0b1e3b",saffron:"#f28b28",mint:"#eaf8f1"},boxShadow:{soft:"0 18px 50px rgba(11,30,59,.10)"}}}, plugins:[] } satisfies Config;
