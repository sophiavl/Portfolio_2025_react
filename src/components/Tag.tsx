type tagProps = {
  label: string;
};

export default function Tag({ label }: tagProps) {
  return (
    <div className='flex w-max h-6 px-4 py-[0.26rem] bg-(--color-accent) justify-center items-center border border-(--color-primary)/70 md:py-4'>
      <p className='tag-text text-(--color-primary)/70'>{label}</p>
    </div>
  );
}
