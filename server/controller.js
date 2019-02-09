const skiers = [
    {
        id: 0,
        name: "Adrienne Wootton",
        type: "Freestyle",
        status: "Advanced",

    },
    {
        id: 1,
        name: "Shaun White",
        type: "Snowboard",
        status: "Advanced"
    },
    {
        id: 2,
        name: "John Doe",
        type: "Alpine",
        status: "Beginner"
    }
    
]

module.exports = {
    getSkiers: (req, res) => {
        res.status(200).send(skiers);
    },

createSkier: (req, res) => {
     const { name, type, status } = req.body;
     skiers.push({
         id,
         name,
         type,
         status
     });
     id++;
     res.status(200).send(skiers);
    }


};
