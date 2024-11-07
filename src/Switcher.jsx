import StepOne from "./StepOne"
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'
import StepFive from './StepFive'


function Switcher({chapter}) {
switch(chapter) {
    case 1: 
        return <StepOne />;
    case 2:
        return <StepTwo />;
    case 3:
        return <StepThree />;
    case 4:
        return <StepFour />;
    case 5:
        return <StepFive />;
    default: return <></>
}

} 
export default Switcher