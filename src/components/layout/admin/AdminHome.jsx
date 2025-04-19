import React, { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { Button } from "@mui/material";
import SimpleForm from "../../form/SimpleForm";

const BannerFormFields = [
  {
    fieldName: "Title",
    fieldId: "title",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Sub Title",
    fieldId: "sub-title",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Description",
    fieldId: "description",
    fieldType: {
      name: "textField",
      multiline: true,
      rows: 5,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Call to Action",
    fieldId: "call-to-action",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
];

const AboutFormFields = [
  {
    fieldName: "Title",
    fieldId: "title",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Description",
    fieldId: "description",
    fieldType: {
      name: "textField",
      multiline: true,
      rows: 5,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
];

const TechSkillsFormFields = [
  {
    fieldName: "Title",
    fieldId: "title",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Description",
    fieldId: "description",
    fieldType: {
      name: "textField",
      multiline: true,
      rows: 5,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
];

const ProjectsFormFields = [
  {
    fieldName: "Title",
    fieldId: "title",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Description",
    fieldId: "description",
    fieldType: {
      name: "textField",
      multiline: true,
      rows: 5,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
];

const ExperiencesFormFields = [
  {
    fieldName: "Title",
    fieldId: "title",
    fieldType: {
      name: "textField",
      multiline: false,
      rows: 0,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
  {
    fieldName: "Description",
    fieldId: "description",
    fieldType: {
      name: "textField",
      multiline: true,
      rows: 5,
      variant: "outlined",
      cssClasses: "w-full",
    },
  },
];

const AdminHome = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <div className="font-montserrat p-8 min-h-screen text-cyan-900">
      <h1 className="font-medium text-3xl mb-12">Home</h1>

      <div>
        <h2 className="font-medium text-xl mb-4">Banner</h2>

        <SimpleForm
          fields={BannerFormFields}
          name="bannerForm"
        />
      </div>

      <hr className="my-8" />

      <div>
        <h2 className="font-medium text-xl mb-4">About Me</h2>

        <SimpleForm
          fields={AboutFormFields}
          name="aboutForm"
        />

        <div className="mb-2">
          <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            startIcon={<FaUpload size={14} />}
          >
            Upload Picture
            <input
              type="file"
              hidden
              accept="image/png, image/gif, image/jpeg"
              onChange={handleImageChange}
            />
          </Button>

          {image && (
            <div className="w-80 mt-4">
              <img
                src={image}
                alt="About me image"
              />
            </div>
          )}
        </div>
      </div>

      <hr className="my-8" />

      <div>
        <h2 className="font-medium text-xl mb-4">Tech &amp; Skills</h2>

        <SimpleForm
          fields={TechSkillsFormFields}
          name="techSkillsForm"
        />
      </div>

      <hr className="my-8" />

      <div>
        <h2 className="font-medium text-xl mb-4">Projects</h2>

        <SimpleForm
          fields={ProjectsFormFields}
          name="projectsForm"
        />
      </div>

      <hr className="my-8" />

      <div>
        <h2 className="font-medium text-xl mb-4">Experiences</h2>

        <SimpleForm
          fields={ExperiencesFormFields}
          name="experiencesForm"
        />
      </div>

      <hr className="my-8" />
    </div>
  );
};

export default AdminHome;
