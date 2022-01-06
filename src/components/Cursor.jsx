export default function Cursor({ x, y }) {
  return (
    <div
      className="absolute"
      style={{
        top: y,
        left: x,
      }}
    >
      <p>Preview Project</p>
    </div>
  );
}
