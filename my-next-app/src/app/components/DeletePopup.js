// components/admin/DeleteConfirmation.jsx

import React from 'react';

const DeleteConfirmation = ({ itemName, itemType, onCancel, onDelete,task }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-20 " style={{zIndex:99999999}}>
      <div className="bg-white rounded p-6 shadow-md mx-12">
        <h2 className="text-lg font-semibold">Confirm Deletion</h2>
        <p className="mt-2">
        
          Are you sure you want to {task} the {itemType} {itemName}?
        </p>
        <div className="flex justify-end mt-4">
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={onDelete}
          >
            {task}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;
