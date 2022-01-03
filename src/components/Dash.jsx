export default function Dash({ height = "14", className }) {
  return (
    <div className={`mt-5 ml-5 ${className}`}>
      <div className={`border-dashed border-white w-1 h-${height} border-r`} />
    </div>
  );
}
