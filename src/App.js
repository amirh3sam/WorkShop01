import React, { useState, useEffect } from "react";
import { database, ref, push, onValue, remove } from "./firebase";
import "./styles.css";

function App() {
  const [salesData, setSalesData] = useState([]);
  const [showDeleteConfirmPopup, setShowDeleteConfirmPopup] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  // Fetch sales data from Firebase
  useEffect(() => {
    const salesRef = ref(database, "sales");
    const unsubscribe = onValue(salesRef, (snapshot) => {
      const data = snapshot.val();
      setSalesData(data ? Object.entries(data).map(([id, value]) => ({ id, ...value })) : []);
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Handle the confirmation of delete
  const confirmDelete = (item) => {
    setItemToDelete(item);
    setShowDeleteConfirmPopup(true);
  };

  // Handle item deletion and show confirmation message
  const handleDelete = () => {
    if (itemToDelete) {
      remove(ref(database, `sales/${itemToDelete.id}`))
        .then(() => {
          showDeleteMessage('Item deleted successfully!');
          resetDeleteState();
        })
        .catch(() => {
          showDeleteMessage('Error deleting item. Please try again.');
          resetDeleteState();
        });
    }
  };

  // Show delete confirmation message
  const showDeleteMessage = (message) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'delete-message';
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);

    setTimeout(() => {
      messageDiv.remove();
    }, 3000);
  };

  // Reset delete state after operation
  const resetDeleteState = () => {
    setShowDeleteConfirmPopup(false);
    setItemToDelete(null);
  };

  return (
    <div className="app-container">
      <div className="sales-table">
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Cars Ready</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {salesData.map((item) => (
              <tr key={item.id}>
                <td>{item.department}</td>
                <td>{item.carsReady}</td>
                <td>{item.timestamp}</td>
                <td>
                  <button onClick={() => confirmDelete(item)} className="delete-button">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDeleteConfirmPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Are you sure you want to delete this item?</p>
            <div className="popup-buttons">
              <button className="popup-button popup-yes" onClick={handleDelete}>
                Yes
              </button>
              <button
                className="popup-button popup-no"
                onClick={resetDeleteState}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
