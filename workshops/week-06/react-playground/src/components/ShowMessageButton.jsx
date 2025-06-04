export const ShowMessageButton = ({ messageClick }) => {
  return (
    <button
      class="font-medium cursor-pointer bg-purple-400 text-purple-950 p-3 rounded-2xl hover:bg-purple-300"
      onClick={() => messageClick()}
    >
      Click me to show message
    </button>
  );
};
