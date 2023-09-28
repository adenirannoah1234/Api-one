const apiBody = document.querySelector('.body');
const apiTag = document.querySelector('.advice');


async function getData() {
    //  fetch('https://api.adviceslip.com/advice')
    //         .then(response => response.json())
    //         .then(data => {
    //     apiBody.textContent = data.slip.advice
    //         apiTag.textContent = data.slip.id
    //        console.log(data)
    //    });
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()
    console.log(data);
    if (response.ok) {
       apiBody.textContent = data.slip.advice
        apiTag.textContent = data.slip.id
     }


}
getData();