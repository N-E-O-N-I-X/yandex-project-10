import type { Meta, StoryObj } from '@storybook/react';

import { ArticleParamsForm } from './ArticleParamsForm';
import { createElement, useState } from 'react';

const meta: Meta<typeof ArticleParamsForm> = {
	component: ArticleParamsForm,
};

export default meta;
type Story = StoryObj<typeof ArticleParamsForm>;

export const ArticleParamsFormStory: Story = {
	render: () =>
		createElement(() => {
			return <ArticleParamsForm />;
		}),
};
