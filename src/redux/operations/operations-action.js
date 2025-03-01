import { createAction } from '@reduxjs/toolkit';

const openModal = createAction('operations/openModal');
const closeModal = createAction('operations/closeModal');
const addNewOperationRequest = createAction('operation/addOperationRequest');
const addNewOperationSuccess = createAction('operation/addOperationSuccess');
const addNewOperationError = createAction('operation/addOperationError');

const getOperationsRequest = createAction('operation/getOperationsRequest');
const getOperationsSuccess = createAction('operation/getOperationsSuccess');
const getOperationsError = createAction('operation/getOperationsError');

const logoutModalAction = createAction('operations/modalLogout');

export {
  openModal,
  closeModal,
  logoutModalAction,
  addNewOperationRequest,
  addNewOperationSuccess,
  addNewOperationError,
  getOperationsRequest,
  getOperationsSuccess,
  getOperationsError,
};
