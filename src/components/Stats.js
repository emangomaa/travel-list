const Stats = ({ items }) => {
  if (items.length === 0) {
    return (
      <em className="stats">Start adding some items to your packing list 🚀</em>
    );
  }
  let listCount = items.length;
  let packedCount = items.filter((item) => item.packed).length;
  let percentage = Math.round((packedCount / listCount) * 100);
  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You got every thing! Ready to go ✈️</em>
      ) : (
        <p>
          💼 You have {listCount} items on your list, and you Already packed{" "}
          {packedCount} ({percentage}%){" "}
        </p>
      )}
    </footer>
  );
};
export default Stats;
