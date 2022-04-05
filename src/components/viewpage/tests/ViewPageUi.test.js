import { shallow } from 'enzyme';
import ViewPageUI from '../ViewPageUi';


describe("Test view page user interface", () => { 

    test("render the initial image", () => { 
        const wrapper = shallow(<ViewPageUI />)
        expect(wrapper.props('#initial-img'))
    })
})

