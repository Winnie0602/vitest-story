import type { Meta, StoryObj } from '@storybook/vue3'
import TodoListView from '../views/TodoListView.vue'

const meta: Meta<typeof TodoListView> = {
title: 'TodoListView',
component: TodoListView,
render: () => ({
    components: { TodoListView },
    template: '<todo-list-view />',
}),
parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/vue/configure/story-layout
    layout: 'fullscreen',
},
// This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof TodoListView>


export const TodoList: Story = {}

// export const LoggedOut: Story = {}
// export const TodoList: Story = {
//     args: {
//         // primary: true,
//         // label: 'TodoCard',
//     },
//     }