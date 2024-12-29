import React from "react";
import ReactDOM from "react-dom";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-sm w-full relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Modal;


// code 2
// import React from "react";
// import ReactDOM from "react-dom";

// function Modal({ isOpen, onClose, children }) {
//   if (!isOpen) return null;

//   return ReactDOM.createPortal(
//     <div className="fixed inset-0 flex items-center justify-center z-50 p-8">
//       <div
//         className="fixed inset-0 bg-gray-800 opacity-50"
//         onClick={onClose}
//       ></div>
//       <div className="bg-white p-0 rounded-lg shadow-lg z-10 relative max-w-[90vw] max-h-[90vh] w-full h-full overflow-auto">
//         <button
//           className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-20 bg-white rounded-full p-2 shadow-md"
//           onClick={onClose}
//         >
//           &times;
//         </button>
//         <div className="w-full h-full flex items-center justify-center">
//           {children}
//         </div>
//       </div>
//     </div>,
//     document.body
//   );
// }

// export default Modal;
