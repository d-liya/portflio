export default function Box({ children, className, bottom }) {
  return (
    <div {...{ className }}>
      <div className="border h-2 w-2 bg-white rounded translate-x-px" />
      <div className={`border-dashed border-l-2 pl-4 text-white mx-1`}>
        {children}
      </div>
      {bottom && (
        <div className="border h-2 w-2 bg-white rounded translate-x-px" />
      )}
    </div>
  );
}
