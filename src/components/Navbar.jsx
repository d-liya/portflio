export default function Navbar() {
  return (
    <div className={`rotate-90 fixed -right-16 bottom-1/2 `}>
      <Button name="ABOUT" /> <Button name="WORK" /> <Button name="SKILLS" />{" "}
    </div>
  );
}

const Button = ({ name }) => {
  return <button className="text-white font-bold mx-4 text-sm">{name}</button>;
};
