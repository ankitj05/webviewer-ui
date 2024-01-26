import React from 'react';
import RibbonItem from './RibbonItem';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

export default {
  title: 'ModularComponents/RibbonItem',
  component: RibbonItem,
};

const initialState = {
  viewer: {
    disabledElements: {},
    customElementOverrides: {},
    openElements: {},
    customPanels: [],
    genericPanels: [],
    headers: {},
    lastPickedToolForGroup: {},
    lastPickedToolGroup: {},
    toolButtonObjects: {},
    toolbarGroup: 'toolbarGroup-View',
  },
};

let currentToolbarGroup = initialState.viewer.toolbarGroup;

const initialStateActive = (toolbarGroup) => {
  currentToolbarGroup = toolbarGroup;
  return ({
    viewer: {
      ...initialState.viewer,
      toolbarGroup: toolbarGroup
    }
  });
};

const store = configureStore({
  reducer: (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'SET_TOOLBAR_GROUP':
        return initialStateActive(payload.toolbarGroup);
      case 'SET_CURRENT_GROUPED_ITEMS':
        return initialStateActive(currentToolbarGroup);
      default:
        return initialState;
    }
  }
});

export const RibbonItems = () => {
  const item1Props = {
    dataElement: 'Ribbon Item1',
    img: 'icon-header-pan',
    title: 'icon only',
    toolbarGroup: 'toolbarGroup-View'
  };
  const item2Props = {
    dataElement: 'Ribbon Item2',
    label: 'label only',
    toolbarGroup: 'toolbarGroup-Annotate'
  };
  const item3Props = {
    dataElement: 'Ribbon Item3',
    label: 'icon and label',
    img: 'icon-header-pan',
    toolbarGroup: 'toolbarGroup-Shapes'
  };
  const item4Props = {
    dataElement: 'Ribbon Item1',
    img: 'icon-header-pan',
    title: 'icon only',
    toolbarGroup: 'toolbarGroup-Insert',
    direction: 'column',
  };
  const item5Props = {
    dataElement: 'Ribbon Item2',
    label: 'label only',
    toolbarGroup: 'toolbarGroup-Measure',
    direction: 'column',
    justifyContent: 'end',
  };
  const item6Props = {
    dataElement: 'Ribbon Item3',
    label: 'icon and label',
    img: 'icon-header-pan',
    toolbarGroup: 'toolbarGroup-Edit',
    direction: 'column',
  };
  return (
    <Provider store={store}>
      <div style={{ display: 'flex', gap: '8px', backgroundColor: 'white' }}>
        <RibbonItem {...item1Props} />
        <RibbonItem {...item2Props} />
        <RibbonItem {...item3Props} />
      </div>
      <div style={{ margin: '22px', display: 'flex', gap: '8px', flexFlow: 'column', width: '80px', backgroundColor: 'white' }}>
        <RibbonItem {...item4Props} />
        <RibbonItem {...item5Props} />
        <RibbonItem {...item6Props} />
      </div>
    </Provider>
  );
};
