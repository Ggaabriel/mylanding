import { useDispatch } from "react-redux"
import type { AppDispatch } from "../redux/store"
//хук для обычного диспатча но с типизацией
export const useAppDispatch = () => useDispatch<AppDispatch>();