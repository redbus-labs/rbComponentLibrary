import React from 'react';
import { Meta, Story } from "@storybook/react";
import { CookieConsent, ICookieProps } from "./CookieConsent";

export default {
  title: 'Atoms/CookieConsent',
  component: CookieConsent,
} as Meta;

const cookiesArray = [
  {
    header: "Cookie Name 1",
    body:
      "Cookie 1 description",
    isMandatory: true,
    isSelected: true,
  },
  {
    header: "Cookie Name 2",
    body:
      "Cookie 2 description",
    isMandatory: false,
    isSelected: false,
  },
  {
    header: "Cookie Name 3",
    body:
      "Cookie 3 description",
    isMandatory: false,
    isSelected: false,
  },
]

const Template: Story<ICookieProps> = (args) => <CookieConsent {...args} />;
export const defaultCookieConsent = Template.bind({});
defaultCookieConsent.args = {
  header: "How we use cookies",
  defaultText: `<div>By choosing “Accept all,” you agree to the storing of all cookies on your device. You can easily manage your cookies in “Settings.” Find more information by reading our  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.</div>`,
  acceptAllText: "Accept All",
  manageSettingsText: "Manage settings",
  howWeUseCookies: "How we use cookies",
  saveLbl: "save",
  cookiesArray: cookiesArray,
  openContentText: `Your cookie settings will be saved for future sessions, and you may opt-out at any time by changing your settings <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">here</a>.`,
};