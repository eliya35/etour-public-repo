import { shallow } from 'enzyme';
import TourCard from '../DisplaySites'


describe('Test home page view button', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<TourCard />)
    })

    test("renders view button", () => {
        expect(wrapper.find("#view-btn").text()).toBe("View")
    })

    test("renders add to list button", () => {
        expect(wrapper.find("#add-item-btn").text()).toBe("Add to List")
    })

    // test("render onClick event of view button and beeing redirected to the viewpage", () => { 
    //     wrapper.find('#view-btn').simulate('click');
    //     expect(wrapper)
    // })
})