import React from 'react';
import { Meta, Story } from "@storybook/react";
import { SurveyBox, IProps } from "./SurveyBox";

export default {
  title: 'Atoms/SurveyBox',
  component: SurveyBox,
  argTypes: {
    onCheckBoxClick: { action: "CheckBox Clicked" }
  }
} as Meta;

const Template: Story<IProps> = (args) => <SurveyBox {...args} />;

const questionObj = {
  QuesId: 1,
  QuestionLabel: "Was the bus staff wearing masks?",
  ImageUrl: "/staff_masks.png",
};


export const defaultSurvey = Template.bind({});
defaultSurvey.args = {
  questionObj,
};

export const surveyWithProps = Template.bind({});
surveyWithProps.args = {
  questionObj,
  image: <img className="icon survey_item_checkbox" src={"/checkbox_filled.svg"} alt="survey" />,
  selected: false
};
