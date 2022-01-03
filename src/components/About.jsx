import Box from "./Box";

export default function About() {
  return (
    <div className="flex p-10 flex-col">
      <div className="text-white text-5xl font-bold flex items-end">
        <p>Hi, I am Dilum</p>
        <p className="text-white text-xl font-bold pl-3"> </p>
      </div>

      <Box className="mt-4 ml-4 max-w-lg">
        <p>
          I am third year computer science student who is currently looking for
          a 8 month internship starting from this Summer. I am interested in
        </p>
      </Box>
    </div>
  );
}
