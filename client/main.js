const complimentBtn = document.getElementById("compliment-button")
const fortuneBtn = document.getElementById("fortune-button")
const addPrayerForm = document.getElementById("prayer")
const editPrayerForm = document.getElementById("edit")
const deletePrayerForm = document.getElementById("delete")
const prayerName = document.getElementById("person-name")
const prayerReason = document.getElementById("prayer-reason")
const editPrayerNameInput = document.getElementById("existing-name")
const editPrayerReason = document.getElementById("new-request")
const deletePrayer = document.getElementById("delete-request")
const getPrayerList = document.getElementById("getPrayers")


const baseURL = "http://localhost:4000/api"


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getfortune = () => {
    axios.get(`${baseURL}/fortune/`)
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


function addPrayer(event){
    event.preventDefault()

    let prayerRequestBody = {

        name: prayerName.value,
        reason: prayerReason.value
    }

    axios.post(`${baseURL}/prayer`, prayerRequestBody).then(result => {
        console.log(result.data)
        alert(`Prayer request for ${result.data.name}'s ${result.data.reason} submitted successfully. Remember ID#${result.data.ID}`)
    }).catch(err => console.log(err.data))
    prayerName.textContent = ""
   
    prayerName.value = "";
    prayerReason.value = "";
};

function getList (){
    axios.get(`${baseURL}/prayerlist`).then((result) => {
        console.log(result.data)
        alert("Full prayer list is in the console.")
    })
}

function editPrayer (event) {
    event.preventDefault()

    let prayerEditBody = {

        name: editPrayerNameInput.value,
        reason: editPrayerReason.value
    }

    axios.put(`${baseURL}/prayerlist?name=${name}`, prayerEditBody).then(result => {
        alert(`${result.data.name}'s request has been updated to ${result.data.reason}`)
        console.log(result.data)
    }).catch(err => {
        console.log(err)
        alert(`Person not found on prayer list`)
    })

    editPrayerNameInput.value = "";
    editPrayerReason.value = "";
}

function delFromList (event) {
    event.preventDefault()

    let id = +deletePrayer.value

    axios.delete(`${baseURL}/prayer?ID=${id}`).then((result) => {
        alert(`${result.data.name}, ID# ${result.data.ID}, removed from prayer list.`)
        console.log(result.data)
    }).catch(err => {
        console.log(err)
        alert("Person not found on prayer list")
    })

    deletePrayer.value = "";

}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getfortune)
addPrayerForm.addEventListener("submit", addPrayer)
getPrayerList.addEventListener("click", getList)
editPrayerForm.addEventListener("submit", editPrayer)
deletePrayerForm.addEventListener("submit", delFromList)