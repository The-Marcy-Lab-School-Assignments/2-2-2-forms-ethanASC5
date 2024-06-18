/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target);
    const { codingLevel, location, didLikeAssignment, username } = Object.fromEntries(formData)
    document.querySelector("#results-username")
        .textContent = username
    document.querySelector("#results-coding-level")
        .textContent = codingLevel
    document.querySelector("#results-location")
        .textContent = location
    const assignment = document.querySelector("#results-did-like-assignment")
    if(didLikeAssignment) {
        assignment.textContent = "No"
    }else {
        assignment.textContent = "Yes"
    }
event.target.reset()
};

const main = () => {

    const form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit)

}

main()