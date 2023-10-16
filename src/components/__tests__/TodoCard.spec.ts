import { describe, it, expect, vi, test } from 'vitest'
import axios from 'axios';

import { mount } from '@vue/test-utils'
import TodoCard from '../TodoCard.vue'

describe('TodoCard', () => {

    test('axios 方法有被呼叫一次', () => {

      // 偵測axios GET 是否被呼叫
      const axiosGet = vi.spyOn(axios, 'get')

      // 把TodoCard.vue 實例化
      const wrapper = mount(TodoCard)
      wrapper.find('.btn').trigger('click')
      
      expect(axiosGet).toHaveBeenCalledTimes(1)
      
      
    })

})
