import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export const RedirectUser = props => {
  return <Redirect to="/login" />;
};
