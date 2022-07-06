import React from 'react';
import { Meta, Story } from "@storybook/react";
import { LanguageModal, ILanguageModalProps } from "./LanguageModal";

export default {
	title: 'Molecules/LanguageModal',
	component: LanguageModal,
	argTypes: {
		submitAction: { action: "on lang change action" }
	}
} as Meta;

const Template: Story<ILanguageModalProps> = (args) => <LanguageModal {...args} />;

export const withProps = Template.bind({});
withProps.args = {
	langaugeIcon: "***",
	mainText: "Select Language",
	subText: "you can change this later.",
	submitText: "Submit",
	selectedLang: "en",
	closeImgWithHandler: "+",
	langArray: [
		{
			id: "en",
			label: "English",
			selected: true,
			flagUrl:"/flag.png",
		},
		{
			id: "es",
			label: "Espanol",
			selected: false,
			flagUrl:"/flag.png",
		},
		{
			id: "hi",
			label: "Hindi",
			selected: false,
			flagUrl:"/flag.png",
		},
	],
	isRDC:false,
	tickMarkIcon:"*"
};

const Template2: Story<any> = (args) => <LanguageModal {...args} />;

export const LanguageModalVersion2 = Template2.bind({});
LanguageModalVersion2.args = {
	langaugeIcon: "***",
	mainText: "Select Language",
	subText: "Choose your default language , you can change this later.",
	submitText: "Submit",
	selectedLang: "en",
	closeImgWithHandler: "+",
	langArray: [
		{
			id: "en",
			label: "English",
			selected: true,
			flagUrl:"/flag.png",
			tickMarkIcon:"*",
			isRDC:true
		},
		{
			id: "es",
			label: "Espanol",
			selected: false,
			flagUrl:"/flag.png",
			tickMarkIcon:"*",
			isRDC:true
		},
		{
			id: "hi",
			label: "Hindi",
			selected: false,
			flagUrl:"/flag.png",
			tickMarkIcon:"*",
			isRDC:true
		},
	],
	isRDC:true,
	tickMarkIcon:"*"
};
