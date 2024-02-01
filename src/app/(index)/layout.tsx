import { Provider } from "./providers";

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
