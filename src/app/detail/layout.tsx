import { Suspense } from "react";

export default function DetailLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
            <Suspense>
                {children}
            </Suspense>
        </body>
    </html>
  );
}
