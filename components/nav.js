import Link from "next/link";

export default function Nav(props) {
  return (
    <Link href={props.link}>
      <div class="bg-white hover:bg-gray-100 rounded-md text-gray-700 px-2 p-1 cursor-pointer transition duration-200 font-medium text-xs">
        {props.text}
      </div>
    </Link>
  );
}
