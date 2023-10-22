export default function Title({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div className="mb-4 md:mb-8">
      <h1 className="mb-2 text-2xl font-bold tracking-wide text-MarineBlue md:text-3xl">
        {title}
      </h1>
      <span className="text-sm text-CoolGray">{subTitle}</span>
    </div>
  );
}
