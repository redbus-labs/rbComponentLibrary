import React from 'react';
import { Meta, Story } from "@storybook/react";
import { IButtonProps, Button } from "./Button";

export default {
    title: 'Atoms/Button',
    component: Button,
    argTypes: {
        onClick: { action: "clicked" },
    }
} as Meta;

const Template: Story<IButtonProps> = (args) => <Button {...args} />;

export const defaultButton = Template.bind({});
defaultButton.args = {

};

export const ButtonWithProps = Template.bind({});
ButtonWithProps.args = {
    color: "#3cb3e2",
    borderRadius: "0px",
    buttonText: "MODIFY FILTERS",
    width: "100px",
    fontSize: 30,
};

export const ButtonWithClickAction = Template.bind({});
ButtonWithClickAction.args = {
};