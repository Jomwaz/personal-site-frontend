import Image from "next/image";

export default function Button(props) {
  let src = props.src;
  let desc = props.desc;

  return (
    <div
      className ="flex items-center p-2 h-16 rounded-full 
                  bg-[#E5E7Eb] dark:bg-dark-bg
                  hover:cursor-pointer hover:outline-stone-500 dark:hover:outline-stone-400
                   outline outline-1 outline-stone-300 dark:outline-white"
    >
      <span className="w-6 p-2"></span>
      <Image
        src={src}
        alt="Button Image"
        quality={100}
        width={50}
        height={50}
      />
      <span className="w-6"></span>

      <span className="text-black dark:text-gray-200">{desc}</span>
    </div>
  );
}
