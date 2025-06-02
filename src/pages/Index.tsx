import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginForm from '../components/LoginPage/LoginForm';

/**
 * LoginPage
 * 
 * This component represents the main login page of the application.
 * It utilizes the `MainAppLayout` to provide a centered card structure
 * and embeds the `LoginForm` component within this layout.
 *
 * The `MainAppLayout` handles the overall page styling (background, centering)
 * and the card container (surface color, padding, shadow).
 * The `LoginForm` contains all the interactive elements for user login,
 * including input fields for username and password, a submit button,
 * and a link for alternative actions like signing up.
 *
 * This page follows the component hierarchy defined in the project requirements:
 * Page (LoginPage) -> Template (CenteredLoginForm, implemented by MainAppLayout) -> Organism (LoginForm).
 */
const LoginPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        The LoginForm component is rendered as a child of MainAppLayout.
        MainAppLayout's CardContent provides p-6 padding and a flex container.
        LoginForm itself manages the layout of its internal elements (heading, inputs, button, footer)
        using its own flex container with gap-4 spacing.
        No 'title' prop is passed to MainAppLayout here, as LoginForm provides its own h1 title.
      */}
      <LoginForm />
    </MainAppLayout>
  );
};

export default LoginPage;
