

export default function Button(props) {
  const icon = props.icon;
  return (
    <button
      className="flex items-center rounded-md cursor-pointer bg-indigo-500 p-2 active:bg-indigo-400 transition duraton-100 hover:bg-indigo-600 hover:shadow-lg text-white font-medium text-sm"
    >
      {icon && <i class={"bx pl-2 " + icon} icon={true}></i>}

      <span class="px-2">{props.text}</span>
    </button>
  );
}
