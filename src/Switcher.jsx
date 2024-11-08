import StepOne from "./StepOne"
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import StepFour from './StepFour'


function Switcher({chapter, success, monthly, setMonthly, plan, setPlan, service, setService, storage, setStorage, profile, setProfile}) {
switch(chapter) {
    case 1: 
        return <StepOne />;
    case 2:
        return <StepTwo monthly={monthly} setMonthly={setMonthly} plan={plan} setPlan={setPlan}/>;
    case 3:
        return <StepThree monthly={monthly} service={service} setService={setService} storage={storage} setStorage={setStorage} profile={profile} setProfile={setProfile} />;
    case 4:
        return <StepFour success={success}/>;
    default: return <></>
}

} 
export default Switcher