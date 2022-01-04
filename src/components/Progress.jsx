export default function Progress({ percentage }) {
  return (
    <div
      className=" h-1 bg-slate-900 border border-sky-500 mt-1 "
      style={{
        width: "100px",
      }}
    >
      <div
        className="h-0.5 bg-sky-500 "
        style={{
          width: `${percentage * 100}px`,
        }}
      />
    </div>
  );
}
