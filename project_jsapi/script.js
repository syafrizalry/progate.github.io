// function valSelected() {
//     d = document.getElementById("select_year").value;
//     alert(d);
// }
const getStandings = async () => {
    const year = document.getElementById("select_year").value;
    try {
        const response = await fetch(`https://api-football-beta.p.rapidapi.com/standings?league=39&season=${year}`,{
            method: "GET",
            headers: {
                "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
                "X-RapidAPI-Key": "978fc59c07msh33dd08091c87013p12fb4djsn0e1d98d01e99"
            },
        });
        const standingsData = await response.json();
        standings = standingsData.response[0].league.standings[0];
        
        const tbody = document.getElementById("data-row");
        let listOfElement = "";
        
        for (let i=0; i<standings.length; i++) {
            const standingData = {
                rank:standings[i].rank,
                team:standings[i].team.name,
                played:standings[i].all.played,
                win:standings[i].all.win,
                draw:standings[i].all.draw,
                lose:standings[i].all.lose,
                gf:standings[i].all.goals.for,
                ga:standings[i].all.goals.against,
                gd:standings[i].goalsDiff,
                points:standings[i].points,
            }
            // console.log(standingData.team + ' ' + standingData.gd + ' ' + standingData.points);
            rowStyle = '';
            if (i<4) {
                rowStyle = 'is-selected';
            }
            
            if (i>17) {
                rowStyle = 'is-danger';
                
            }
            const element = `
                <tr class="${rowStyle}">
                <th>${standingData.rank}</th>
                <td>${standingData.team}</td>
                <td>${standingData.played}</td>
                <td>${standingData.win}</td>
                <td>${standingData.draw}</td>
                <td>${standingData.lose}</td>
                <td>${standingData.gf}</td>
                <td>${standingData.ga}</td>
                <td>${standingData.gd}</td>
                <td>${standingData.points}</td>
                </tr>
            `;

            listOfElement += element;
        }

        tbody.innerHTML = listOfElement;

    } catch (error) {
        console.log(error);
        return;
    }
}


