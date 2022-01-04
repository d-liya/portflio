import { Slide } from "react-reveal";

export default function Project({
  title,
  description,
  info,
  link,
  linkHref,
  download,
}) {
  return (
    <Slide bottom cascade duration={500}>
      <div className="py-5 max-w-lg">
        <h1 className="font-black text-lg">{title}</h1>
        <p className="max-w-lg pt-1">{description}</p>
        <ol className="list-disc py-5 pl-5">
          {info.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
        {link && (
          <a
            href={linkHref}
            target="_blank"
            rel="noreferrer"
            className="text-sky-500 hover:text-sky-600 font-bold "
            download={download}
          >
            {link}
          </a>
        )}
      </div>
    </Slide>
  );
}
