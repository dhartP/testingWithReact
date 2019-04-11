import React from 'react';
import {shallow} from 'enzyme';
import Header from "./index";
import { findByTestAttr } from './../../../Utils';

//to refactor our shallow(component) code in everytest
const setUp = (props = {}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

//refactor component.find in every test
// const findByTestAttr = (component, attr) => {
//     const wrapper = component.find(`[data-test='${attr}']`);
//     return wrapper;
// }

describe('Header Component' , () => {

    // i made component and called it before every test
    let component;
    beforeEach(() => {
        component = setUp();
    });


    it('Should render without errors' ,() =>{
        //as code is reprtative in every test so made one function up there called setUp()
        //const component = shallow(<Header/>);

        //this is whem we use className attr in index.js cz just cz other developer can chnage className without knowing that we have used it in out test
        // const wrapper = component.find('.headerComponent');

        // so we used data-test attr to over come className problem
        // now we have again repetative code that component.find in every test so i made function findByTestAttr(component, attr)
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo' ,() =>{
       // const component = shallow(<Header/>);
        // const logo = component.find('.logoIMG');
        const logo = findByTestAttr(component, 'logoIMG');
        expect(logo.length).toBe(1);
    });
});