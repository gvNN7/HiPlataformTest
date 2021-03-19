import AppBloc from '../../bloc/appBloc.js';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const mock = [{
  id: "49569f0a-5292-4476-94b2-68df51acebe2",
  isChecked: false,
  isExpanded: false,
  level: 0,
  name: "Tim Roger Y.",
  children: [{
    id: "777888-5292-4476-94b2-9998566665abs2",
    isChecked: false,
    isExpanded: false,
    level: 1,
    name: "Tim Roger Z.",
    children: []
  }]
}];

let appBloc = new AppBloc();

it('Create instance of Bloc', () => {
  expect(appBloc).toEqual(new AppBloc());
})

it('Expands row', () => {
  appBloc.parentList = mock;
  appBloc.toggleRowExpansion('777888-5292-4476-94b2-9998566665abs2');
  expect(appBloc.parentList).toEqual(
    [{
      id: "49569f0a-5292-4476-94b2-68df51acebe2",
      isChecked: false,
      isExpanded: false,
      level: 0,
      name: "Tim Roger Y.",
      children: [{
        id: "777888-5292-4476-94b2-9998566665abs2",
        isChecked: false,
        isExpanded: true,
        level: 1,
        name: "Tim Roger Z.",
        children: []
      }]
    }]
  );
  
})

it('Wrap row', () => {
  appBloc.parentList = mock;
  appBloc.toggleRowExpansion('777888-5292-4476-94b2-9998566665abs2');
  expect(appBloc.parentList).toEqual(
    [{
      id: "49569f0a-5292-4476-94b2-68df51acebe2",
      isChecked: false,
      isExpanded: false,
      level: 0,
      name: "Tim Roger Y.",
      children: [{
        id: "777888-5292-4476-94b2-9998566665abs2",
        isChecked: false,
        isExpanded: false,
        level: 1,
        name: "Tim Roger Z.",
        children: []
      }]
    }]
  );
})

it('Mark checkBox', () => {
  appBloc.parentList = mock;
  appBloc.toggleCheckBox('777888-5292-4476-94b2-9998566665abs2');
  expect(appBloc.parentList).toEqual(
    [{
      id: "49569f0a-5292-4476-94b2-68df51acebe2",
      isChecked: false,
      isExpanded: false,
      level: 0,
      name: "Tim Roger Y.",
      children: [{
        id: "777888-5292-4476-94b2-9998566665abs2",
        isChecked: true,
        isExpanded: false,
        level: 1,
        name: "Tim Roger Z.",
        children: []
      }]
    }]
  );
})

it('Unmark checkBox', () => {
  appBloc.parentList = mock;
  appBloc.toggleCheckBox('777888-5292-4476-94b2-9998566665abs2');
  expect(appBloc.parentList).toEqual(
    [{
      id: "49569f0a-5292-4476-94b2-68df51acebe2",
      isChecked: false,
      isExpanded: false,
      level: 0,
      name: "Tim Roger Y.",
      children: [{
        id: "777888-5292-4476-94b2-9998566665abs2",
        isChecked: false,
        isExpanded: false,
        level: 1,
        name: "Tim Roger Z.",
        children: []
      }]
    }]
  );
})

it('Mark checkBox and all of their childrens', () => {
  appBloc.parentList = mock;
  appBloc.toggleCheckBox('49569f0a-5292-4476-94b2-68df51acebe2');
  expect(appBloc.parentList).toEqual(
    [{
      id: "49569f0a-5292-4476-94b2-68df51acebe2",
      isChecked: true,
      isExpanded: false,
      level: 0,
      name: "Tim Roger Y.",
      children: [{
        id: "777888-5292-4476-94b2-9998566665abs2",
        isChecked: true,
        isExpanded: false,
        level: 1,
        name: "Tim Roger Z.",
        children: []
      }]
    }]
  );
})

it('Unmark checkBox and all of their childrens', () => {
  appBloc.parentList = mock;
  appBloc.toggleCheckBox('49569f0a-5292-4476-94b2-68df51acebe2');
  expect(appBloc.parentList).toEqual(
    [{
      id: "49569f0a-5292-4476-94b2-68df51acebe2",
      isChecked: false,
      isExpanded: false,
      level: 0,
      name: "Tim Roger Y.",
      children: [{
        id: "777888-5292-4476-94b2-9998566665abs2",
        isChecked: false,
        isExpanded: false,
        level: 1,
        name: "Tim Roger Z.",
        children: []
      }]
    }]
  );
})

it('Save list on localstorage', () => {
  appBloc.parentList = mock;
  appBloc.storeDataOnLocalStorage();
  expect(JSON.parse(window.localStorage.getItem('data'))).toEqual(mock);
})

it('Retreive list from localstorage', () => {
  appBloc.getDataFromLocalStorage();
  expect(appBloc.parentList).toEqual(mock);
})

