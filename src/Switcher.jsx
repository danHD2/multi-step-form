import StepOne from "./StepOne"
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'

function Switcher({everything, setEverything}) {
switch(everything.chapter) {
    case 1: 
        return <StepOne everything={everything} setEverything={setEverything}/>;
    case 2:
        return <StepTwo everything={everything} setEverything={setEverything}/>;
    case 3:
        return <StepThree everything={everything} setEverything={setEverything} />;
    case 4:
        return <StepFour everything={everything} setEverything={setEverything}/>;
    default: return <></>
}

} 
export default Switcher