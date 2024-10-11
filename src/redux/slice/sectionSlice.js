import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addedFont: {
    headFont: "",
    siteFont: "",
    title:""
  },
  colorPalete: {
    color: []
  },
  selectedPage: {
    pages: []
  },
  addedSection: {
    introSection: false,
    aboutSection: false,
    footerSection: false,
  },
  currentSelected: {
    introSection: false,
    aboutSection: false,
    footerSection: false,
  },
  sections: {
    introSection: {
      intro1: false,
      intro2: false,
      intro3: false,
    },
    aboutSection: {
      about1: false,
      about2: false,
    },
    footerSection: {
      footer1: false,
      footer2: false,
      footer3: false,
      footer4: false,
    },
  },
};

const sectionSlice = createSlice({
  name: 'sections',
  initialState,
  reducers: {
    setFont: (state, action) => {
      state.addedFont = { ...state.addedFont, ...action.payload };
    },
    setColorPalete: (state, action) => {
      state.colorPalete.color = action.payload;
    },
    setSelectedPage: (state, action) => {
      state.selectedPage.pages = action.payload;
    },
    setAddedSection: (state, action) => {
      state.addedSection = { ...state.addedSection, ...action.payload };
    },
    setCurrentSelected: (state, action) => {
      state.currentSelected = { ...state.currentSelected, ...action.payload };
    },
    updateSections: (state, action) => {
      const { sectionName, sectionData } = action.payload;
      state.sections[sectionName] = { ...state.sections[sectionName], ...sectionData };
    },
    resetAllSections: (state) => {
      state.sections = initialState.sections;  // Reset all sections to initial state
    }
  },
});

export const { setFont, setColorPalete, setSelectedPage, setAddedSection, setCurrentSelected, updateSections, resetAllSections } = sectionSlice.actions;

export default sectionSlice.reducer;
