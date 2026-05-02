type tagProps = {
  label: string;
};

export default function Tag({ label }: tagProps) {
  return (
    <div className='flex w-max h-6 px-4 py-[0.26rem] justify-center items-center border border-(--color-accent)/70 md:py-4'>
      <p className='tag-text text-(--color-accent)/70'>{label}</p>
    </div>
  );
}
