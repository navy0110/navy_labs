import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" });
export const metadata: Metadata = { title: "Navy Labs", description: "Estrategia, diseño y tecnología con foco en ventas." };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="es" className={`${sans.variable} ${mono.variable}`}><body>{children}</body></html>; }
