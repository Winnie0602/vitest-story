import type { Meta, StoryObj } from '@storybook/vue3'

import TodoCard from '../components/TodoCard.vue'

const meta: Meta<typeof TodoCard> = {
title: 'TodoCard',
component: TodoCard,
tags: ['autodocs'],
args: { todo: '123', type: 'todo' }, // default value
}

export default meta
type Story = StoryObj<typeof TodoCard>

export const Primary: Story = {
    args: {
        todo: '456',
        type: 'todo'
    },
}
