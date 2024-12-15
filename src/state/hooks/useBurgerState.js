import { useRecoilState } from "recoil";
import { burgerClickedState } from "../atoms/burgerAtom";

export const useBurgerState = () => {
  const [burgerClicked, setBurgerClicked] = useRecoilState(burgerClickedState);
  const clicked = burgerClicked;
  const setClick = setBurgerClicked;

  return {
    clicked,
    setClick,
  };
};
