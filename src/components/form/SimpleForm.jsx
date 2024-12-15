import React from "react";
import { Box, TextField } from "@mui/material";

const SimpleForm = ({ fields, name }) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      id={name}
    >
      {fields.map(({ fieldName, fieldId, fieldType }, index) => {
        if (fieldType.name === "textField") {
          return (
            <div
              className="mb-2"
              key={`${fieldId}-${index}`}
            >
              <TextField
                id={fieldId}
                label={fieldName}
                variant={fieldType.variant}
                className={fieldType.cssClasses}
                multiline={fieldType.multiline}
                rows={fieldType.rows}
              />
            </div>
          );
        } else {
          return null;
        }
      })}
    </Box>
  );
};

export default SimpleForm;
