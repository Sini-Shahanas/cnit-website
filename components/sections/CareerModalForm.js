import { useState } from "react";

const CareerFormModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      {/* Button to open the modal */}
      <button
        className="theme-btn apply-button"
        onClick={handleOpenModal}
      >
        Apply Now
      </button>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>CAREER ENQUIRY</h3>
            <form>
              {/* <label htmlFor="name">Name</label> */}
              <input type="text" id="name" name="name" placeholder="Enter your name" required />

              {/* <label htmlFor="email">e-Mail</label> */}
              <input type="email" id="email" name="email" placeholder="Enter your email" required />

              {/* <label htmlFor="mobile">Mobile Number</label> */}
              <input type="tel" id="mobile" name="mobile" placeholder="Enter your mobile number" required />

              {/* <label htmlFor="resume">Upload Resume</label> */}
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" />

              {/* <label htmlFor="address">Address</label> */}
              <textarea id="address" name="address" placeholder="Enter your address"></textarea>

              {/* <label htmlFor="comments">Comments (if any)</label> */}
              <textarea id="comments" name="comments" placeholder="Additional comments (if any)"></textarea>

              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
        </div>
      )}
      <style jsx>{`
        /* Modal Background */
        .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }
            
        .modal {
            display: flex;
            justify-content: center;
            align-items: center;
            position: fixed;
            z-index: 1000;
        }

        /* Modal Content */
        .modal-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            width: 50%;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            position: relative;
            font-family: var(--text-font);
            padding-bottom:60px;
        }

        .modal-content h2 {
            text-align: center;
            margin-bottom: 20px;
        }

        .modal-content form {
            display: flex;
            flex-direction: column;
        }

        /* .modal-content form label {
            margin-top: 10px;
        } */

        .modal-content form input,
        .modal-content form textarea,
        .modal-content form button {
            margin-top: 5px;
            padding: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .modal-content form button {
            background-color: #022a51;
            color: white;
            cursor: pointer;
            margin-top: 20px;
            font-size: 13px;
            width:100px;
            position: absolute;
            right: 20px;
            bottom: 10px;
        }

        .close {
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 28px;
            cursor: pointer;
        }
        @media (max-width: 600px) {
            .modal-content {
            width: 100vw;  /* 100% of viewport width for smaller screens */
            height: 100vh;  /* 100% of viewport height for smaller screens */
            max-width: 100vw;  /* Ensures modal can expand to full width */
            max-height: 100vh;  /* Ensures modal can expand to full height */
            padding: 15px;  /* Reduce padding for smaller screens */
            }
        }
        
        /* Additional smaller screen styling (optional) */
        @media (max-width: 400px) {
            .modal-content {
            width: 100%;  /* 100% of screen width */
            height: auto;  /* Adjust height automatically */
            max-height: 90vh;  /* Max height 90% of viewport height */
            padding: 10px;  /* Reduce padding further */
            }
        }
      `}</style>
    </div>
  );
};

export default CareerFormModal;
