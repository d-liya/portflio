export default function Image({ src, alt }) {
  return (
    <div className="max-w-xs  lg:max-w-sm mx-4 my-2">
      <img src={src} alt={alt} className="rounded-lg " />
      <p className="text-center text-sm font-bold text-sky-500">{alt}</p>
    </div>
  );
}
