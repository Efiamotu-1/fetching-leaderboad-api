
const createGame = async() => {
    const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/'
    const response = await fetch(gameUrl, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name: 'Leaderboard'
        })
    })
    let data = await response.json()
    console.log(data)
    return data;
}

// createGame()

const addScore = async() => {
    const addUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lHHLhk3cg4FvytULrzUd/scores/'
    let response = await fetch(addUrl, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            user: 'John Doe',
            score: 99
        })
    })

    
    let data = await response.json()
    console.log(data)
    return data
}
// addScore()

const getScores = async() => {
    const getUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lHHLhk3cg4FvytULrzUd/scores/'
    let response = await fetch(getUrl)
    let data = await response.json()
    console.log(data)
    console.log(data.result)
    console.log(data.result[0])
    return data
}
getScores()