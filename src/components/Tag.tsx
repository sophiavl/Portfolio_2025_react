type tagProps = {
  label: string;
};

export default function Tag({ label }: tagProps) {
  return (
    <div className='flex w-max h-6 px-4 py-[0.26rem] bg-(--color-primary) justify-center items-center border border-(--color-secondary)/70'>
      <p className='tag-text text-(--color-secondary)/70'>{label}</p>
    </div>
  );
}
