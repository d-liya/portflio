import Progress from "./Progress";

export default function Skills({ title, skills }) {
  return (
    <div className="px-10 py-6 bg-slate-900">
      <h3 className="text-sky-100 font-bold">{title}</h3>
      <ol className=" pt-2 text-sm">
        {skills.map((el, i) => (
          <li className="py-1 text-sky-200" key={i}>
            {el.name} <Progress percentage={el.percentage} />
          </li>
        ))}
      </ol>
    </div>
  );
}
