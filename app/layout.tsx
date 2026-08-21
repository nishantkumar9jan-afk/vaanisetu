import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Vaani-Setu | Every Government Benefit", description:"Voice-first government scheme discovery" };
export default function Layout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html> }
