// components/PageWrapper.tsx
export default function PageWrapper({
  children,
  bgColor,
}: {
  children: React.ReactNode;
  bgColor?: string;
}) {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className='w-dvw px-4 md:px-12 2xl:px-14'
    >
      {children}
    </div>
  );
}
