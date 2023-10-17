import { describe, expect, vi, test } from 'vitest'
import axios from 'axios';

import { mount } from '@vue/test-utils'
import TodoCard from '../TodoCard.vue'

describe('TodoCard', () => {

    test('axios 方法有被呼叫一次', () => {

      // 設定一個回傳值, 偵測axios GET 是否被呼叫
      const axiosGet = vi.spyOn(axios, 'get')

      // 把TodoCard.vue 實例化
      const wrapper = mount(TodoCard)

      // 尋找元件內的元素, 並點擊它 
      wrapper.find('[data-test="todo-btn"]').trigger('click')
      
      // 測試axiosGet是否會被call一次
      expect(axiosGet).toHaveBeenCalledTimes(1)
      
    })
})
