import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import TodoListManagement from './TodoListManagement';

const mockStore = configureStore([]);

describe('TodoListManagement', () => {
    const store = mockStore({
        todos: []
    });

    const wrapper = mount(<Provider store={ store }><TodoListManagement todo='' /></Provider>);

    test('render without error', () => {
        expect(wrapper.exists()).toBe(true);
    })

});

//todo how to test a HOC ?
//todo what is shallow