import {describe, it, expect} from 'vitest'

import {mount} from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import IpAddressLookup from '../IpAddressLookup.vue'

describe('HelloWorld', () => {
    it('renders properly', () => {
        const wrapper = mount(HelloWorld, {props: {msg: 'Hello Vitest'}})
        expect(wrapper.text()).toContain('Hello Vitest')
    })
});

describe('IpAddressLookup', () => {
    let wrapper = mount(IpAddressLookup);

    it('renders properly', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('has a form', () => {
        expect(wrapper.find('form').exists()).toBe(true)
    })

    it('has an input field', () => {
        expect(wrapper.find('input').exists()).toBe(true)
    })

    it('displays an error message for an invalid IP address', async () => {
        const input = wrapper.find('input')
        await input.setValue('orf.at')
        expect(wrapper.text()).toContain('Invalid hostname1')
    })
})
