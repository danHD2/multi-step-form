import StepFive from "./StepFive"

function StepFour({success}) {
return (
    <div>{success ? <StepFive /> : ""}</div>
)
}

export default StepFour