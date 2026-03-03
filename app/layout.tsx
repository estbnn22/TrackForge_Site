import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrackForge | Workout Tracker for Lifters",
  description:
    "TrackForge helps lifters log workouts faster, follow progress clearly, build streaks, and unlock cards as they train.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
