import TransactionItem from "./TransactionItem";
import "../Luis.css";
// import Entry from "./Item";

function TransactionItemList({ items, onDeleteItem, onCheckedItem }) {
  return (
    <div className="transactionTable">
      <table className="tableHeader">
        <tr>
          <td className="bold-text">DATE</td>
          <td className="bold-text">TYPE</td>
          <td className="bold-text">PURPOSE</td>
          <td className="bold-text">AMOUNT</td>
          <td className="bold-text">REASON</td>
          <td className="bold-text">STATUS</td>
          <td className="bold-text">DELETE</td>
        </tr>

        {items.map((item) => (
          <TransactionItem
            item={item}
            key={item.id}
            onDelete={onDeleteItem}
            onCheckedItem={onCheckedItem}
          />
        ))}
      </table>
    </div>
  );
}

export default TransactionItemList;
