import { TypedUseSelectorHook } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useTypedDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
