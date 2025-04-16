import Credits from "@/components/elements/Credits";

export default function ChallengesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <main>{children}</main>
      <Credits />
    </div>
  );
}
