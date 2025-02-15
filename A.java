body {
    background-color: #f0f4f8;
    font-family: Arial, sans-serif;
    text-align: center;
}

.app-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

.tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.tab {
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    position: relative;
}

.sales-tab {
    background-color: lightblue;
    color: black;
}

.car-ready-tab {
    background-color: gray;
    color: white;
}

.notification-badge {
    position: absolute;
    top: -5px;
    right: -10px;
    background: red;
    color: white;
    font-size: 12px;
    border-radius: 50%;
    padding: 5px 8px;
}

.fancy-button {
    width: 100%;
    margin-top: 10px;
    background: linear-gradient(90deg, #8B4513, #D2691E);
    color: white;
    font-weight: bold;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}

.fancy-button:hover {
    background: linear-gradient(90deg, #D2691E, #8B4513);
    transform: scale(1.05);
}

.confirm-popup {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    text-align: center;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.popup-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.popup-button {
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 5px;
    font-weight: bold;
    border: none;
}

.popup-yes {
    background-color: #4CAF50;
    color: white;
}

.popup-no {
    background-color: #f44336;
    color: white;
}

.submit-form {
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 5px;
    margin-top: 20px;
}

#departmentSelect, #carCount {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    background-color: #4fa3f7;
    color: white;
    border: 1px solid #4fa3f7;
    border-radius: 5px;
    margin-top: 10px;
    box-sizing: border-box;
}

#departmentSelect:focus, #carCount:focus {
    outline: none;
    border-color: #3c8ac7;
}

.delete-button {
    background-color: #f44336;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    margin-top: 10px;
}

.delete-button:hover {
    background-color: #d32f2f;
}

.confirmation-message {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #4CAF50;
    color: white;
    padding: 15px;
    border-radius: 5px;
    display: none;
    animation: fadeInOut 3s ease-in-out;
}

@keyframes fadeInOut {
    0% { opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { opacity: 0; }
}

.delete-message {
    background-color: #f44336;
    color: white;
    padding: 15px;
    border-radius: 5px;
    margin-top: 15px;
    text-align: center;
}
