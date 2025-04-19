import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export const Modal = ({ onClose, open, jobPositions, tasks } = props) => {
  const handleOnClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleOnClose}
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth={true}
    >
      <DialogTitle>Job Position/s</DialogTitle>
      <DialogContent>
        {jobPositions.map((jp, idx) => (
          <p
            className="mb-2"
            key={`jp-${idx}`}
          >
            {jp.position} <br />
            <span className="text-xs">{jp.duration}</span>
          </p>
        ))}
      </DialogContent>
      <DialogTitle>Job Tasks</DialogTitle>
      <DialogContent>
        <ul className="list-disc pl-4">
          {tasks.map((task, idx) => (
            <li
              className="mb-2"
              key={`j-task-${idx}`}
            >
              {task}
            </li>
          ))}
        </ul>
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          onClick={(e) => onClose()}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};
