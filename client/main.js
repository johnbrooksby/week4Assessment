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
    console.log(prayerName.value)

    axios.post(`${baseURL}/prayer`, prayerRequestBody).then(result => {
        console.log(result.data)
        alert(`Prayer request submitted successfully`)
    }).catch(err => console.log(err.data))
    prayerName.textContent = ""
   
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getfortune)
addPrayerForm.addEventListener("submit", addPrayer)
// editPrayerForm.addEventListener("submit", )
// deletePrayer.addEventListener("submit", )