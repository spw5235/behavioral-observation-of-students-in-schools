'use strict';
const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');
const store = require('../store');

// LOGIN EVENTS

const onSignIn = function(event) {
	event.preventDefault();
	let data = getFormFields(event.target);
	api.signIn(data)
  .then((response) => {
		store.user = response.user;
		return store.user;
	})
  .done(ui.success)
  .catch(ui.onSignInFailure);
};

const onSignUp = function(event) {
	event.preventDefault();
	let data = getFormFields(event.target);
	api.signUp(data)
  .done(ui.success)
  .catch(ui.failure);
};

const onSignOut = function(event) {
	event.preventDefault();
	let data = getFormFields(event.target);
	api.signOut(data)
  .done(ui.success)
  .fail(ui.failure);
};

const onChangePassword = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};

// STUDENT EVENTS

const onGetStudents = function(event) {
  event.preventDefault();
	api.getStudents()
  .done(ui.getStudentSuccess)
  .fail(ui.getStudentFailure);
};

const onShowStudent = function(event) {
  event.preventDefault();
	api.showStudent()
  .done(ui.showStudentSuccess)
  .fail(ui.showStudentFailure);
};

const onCreateStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createStudent(data)
  .done(ui.createStudentSuccess)
  .fail(ui.createStudentFailure);
};

const onUpdateStudent = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateStudent(data)
  .done(ui.updateStudentSuccess)
  .fail(ui.updateStudentFailure);
};

// SETTING EVENTS

const onGetSettings = function(event) {
  event.preventDefault();
	api.getSettings()
  .done(ui.getSettingSuccess)
  .fail(ui.getSettingFailure);
};

const onShowSetting = function(event) {
  event.preventDefault();
	api.showSetting()
  .done(ui.showSettingSuccess)
  .fail(ui.showSettingFailure);
};

const onCreateSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createSetting(data)
  .done(ui.createSettingSuccess)
  .fail(ui.createSettingFailure);
};

const onUpdateSetting = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateSetting(data)
  .done(ui.updateSettingSuccess)
  .fail(ui.updateSettingFailure);
};


// OBSERVATION EVENTS

const onGetObservations = function(event) {
  event.preventDefault();
	api.getObservations()
  .done(ui.getObservationSuccess)
  .fail(ui.getObservationFailure);
};

const onShowObservation = function(event) {
  event.preventDefault();
	api.showObservation()
  .done(ui.showObservationSuccess)
  .fail(ui.showObservationFailure);
};

const onCreateObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.createObservation(data)
  .done(ui.createObservationSuccess)
  .fail(ui.createObservationFailure);
};

const onUpdateObservation = function(event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.updateObservation(data)
  .done(ui.updateObservationSuccess)
  .fail(ui.updateObservationFailure);
};

const addHandlers = () => {
	$('#get-students-form').on('submit', onGetStudents);
  $('#show-student-form').on('submit', onShowStudent);
  $('#new-student-form').on('submit', onCreateStudent);
  $('#update-student-form').on('submit', onUpdateStudent);
  $('#get-settings-form').on('submit', onGetSettings);
  $('#show-setting-form').on('submit', onShowSetting);
  $('#new-setting-form').on('submit', onCreateSetting);
  $('#update-setting-form').on('submit', onUpdateSetting);
  $('#get-observations-form').on('submit', onGetObservations);
  $('#show-observation-form').on('submit', onShowObservation);
  $('#new-observation-form').on('submit', onCreateObservation);
  $('#update-observation-form').on('submit', onUpdateObservation);
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
	addHandlers,
};
