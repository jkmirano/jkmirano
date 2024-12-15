import { atom } from "recoil";

const homeState = atom({
  key: "burgerClicked",
  default: {
    banner: {
      title: '',
      subTitle: '',
      description: '',
      callToAction: '',
    },
    about: {
      title: '',
      description: '',
    },
    techSkills: {
      title: '',
      description: '',
    },
    projects: {
      title: '',
      description: '',
    },
    experience: {
      title: '',
      description: ''
    }
  },
});

export { homeState };
