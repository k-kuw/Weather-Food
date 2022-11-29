import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type {Location} from "../../types"

// categoryId型定義
interface LocationState {
 location: Location[]
}

// categoryId初期値(30は人気メニューカテゴリー)
const initialState = {
  location: [{
  country: "loading",
  name: "loading",
  lat: 0,
  lon: 0,
  local_names: {
    ar: "loading",
    be: "loading",
    bg: "loading",
    ca: "loading",
    cs: "loading",
    cy: "loading",
    da: "loading",
    de: "loading",
    el: "loading",
    en: "loading",
    eo: "loading",
    es: "loading",
    et: "loading",
    fa: "loading",
    fi: "loading",
    fr: "loading",
    he: "loading",
    hr: "loading",
    ia: "loading",
    io: "loading",
    is: "loading",
    it: "loading",
    ja: "loading",
    kn: "loading",
    ko: "loading",
    ku: "loading",
    la: "loading",
    lb: "loading",
    lt: "loading",
    lv: "loading",
    mi: "loading",
    mr: "loading",
    nl: "loading",
    oc: "loading",
    pl: "loading",
    pt: "loading",
    ru: "loading",
    sk: "loading",
    sl: "loading",
    sr: "loading",
    sv: "loading",
    ta: "loading",
    tg: "loading",
    th: "loading",
    tr: "loading",
    uk: "loading",
    vi: "loading",
    zh: "loading",
  }}]
} as LocationState

//おすすめcategoryId用Slice
const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (
      state = initialState,
      action: PayloadAction<Location[]>
    ) => {
      state.location = action.payload
    }
  }
})

export const { setLocation } = locationSlice.actions
export default locationSlice.reducer
