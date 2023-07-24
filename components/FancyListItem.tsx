export default function FancyListItem(props: { darkMode: boolean, text: string }) {
  return (
    <li className="mb-2 flex text-base font-semibold">
      <span
        className="bg-blue-600 dark:bg-blue-400 mr-2 px-2 flex h-6 w-full max-w-[24px] items-center justify-center rounded"
      >
        👉
      </span>
      {props.text}
    </li>
  );
}
