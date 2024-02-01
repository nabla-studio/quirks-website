import { Provider } from "./providers";
import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col bg-secondary">
      <Provider>{children}</Provider>
    </main>
  );
}
