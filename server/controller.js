
let ID = 1;
let prayerList = [];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["You're heading in the right direction", "Wow! I never thought you'd make it, but here you are", "Your mother was a hamster", "A person of words and not deeds is like a garden full of weeds. So get out there and do something", "A pleasant surprise is waiting for you", "A short pencil is usually better than a long memory any day. Are you taking notes?", "Everyday in your life is a special occasion. Seize the day", "Success is failure turned inside out. Learn from your failures and keep moving", "Technology is the art of arranging the world so we do not notice it"];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    addPrayerRequest: (req, res) => {
        let newPrayerItem = {ID, ...req.body}
        prayerList.push(newPrayerItem)
        ID++
        res.status(200).send(newPrayerItem)
    },
    getPrayerList: (req, res) => {
        res.status(200).send(prayerList)
    },
    editPrayer: (req, res) => {
        let putName = req.body.name
        let reason = req.body.reason
        let index
        
        for (let i = 0; i < prayerList.length; i++){
            let currentName = prayerList[i].name
            if (currentName === putName){
               index = i
            }
        }
        if (index === undefined){
            res.sendStatus(404)
        } else {
            prayerList[index].reason = reason
            res.status(200).send(prayerList[index])
        }
    },
    deleteFromList: (req, res) => {
        let deleteID = +req.query.ID
        let index

        for (let i = 0; i < prayerList.length; i++){
            let currentID = prayerList[i].ID
            if (currentID === deleteID)
                index = i
        }
        if (index === undefined) {
            res.sendStatus(404)
        } else {
            let removedID = deleteID
            let removedPerson = prayerList.splice(index, 1)
            let removedBod = {
                ID: removedID,
                name: removedPerson[0].name
            }
            res.status(200).send(removedBod)
        }
    }

}