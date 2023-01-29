import { UIContext } from "@/context/UIContext";
import React from "react";
import { useEffect } from "react";
import { useContext } from "react";

const Notification = () => {
  const { showNotification, setShowNotification } = useContext(UIContext);

  setTimeout(() => {
    setShowNotification({
      show: false,
      message: "",
    });
  }, 5000);

  if (!showNotification.show) {
    return null;
  }
  return (
    <div className="notification" style={{transition:"0.4s all"}} >
      <div className="alert -small -fixed">
        <p className="alert-message -unspace">{showNotification?.message}</p>
        <button
          className="icon-button -small"
          onClick={() =>
            setShowNotification({
              show: false,
              message: "",
            })
          }
          aria-label="close"
        >
          <i aria-hidden className="icon">
            <svg
              className="default"
              width={14}
              height={14}
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" />
            </svg>
            <svg
              className="minimal"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7552 0.244806C16.0816 0.571215 16.0816 1.10043 15.7552 1.42684L1.42684 15.7552C1.10043 16.0816 0.571215 16.0816 0.244806 15.7552C-0.0816021 15.4288 -0.0816021 14.8996 0.244806 14.5732L14.5732 0.244806C14.8996 -0.0816019 15.4288 -0.0816019 15.7552 0.244806Z"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.7552 15.7552C15.4288 16.0816 14.8996 16.0816 14.5732 15.7552L0.244807 1.42684C-0.0816013 1.10043 -0.0816013 0.571215 0.244807 0.244806C0.571215 -0.0816021 1.10043 -0.0816021 1.42684 0.244806L15.7552 14.5732C16.0816 14.8996 16.0816 15.4288 15.7552 15.7552Z"
              />
            </svg>
          </i>
        </button>
      </div>
    </div>
  );
};

export default Notification;
