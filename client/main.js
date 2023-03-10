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
let globalID = 1;

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

let prayerRequestBody = {
    id: globalID,
    name: prayerName.value,
    reason: prayerReason.value
}

function addPrayer(){
    axios.post(`${baseURL}/prayer`, [prayerRequestBody]).then(result => {
        console.log(result.data)
        alert(`Prayer request submitted successfully`)
    }).catch(err => console.log(err.data))

    globalID++
};

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getfortune)
addPrayer.addEventListener("submit", )
editPrayer.addEventListener("submit", )
deletePrayer.addEventListener("submit", )