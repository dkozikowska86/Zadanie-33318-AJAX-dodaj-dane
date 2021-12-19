let btnPobierz = document.getElementById('pobierz');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(response => response.json())
        .then(data => {

            let pIdentity = document.createElement('p');
            let pUserID = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');

            pIdentity.innerText = `ID: ${data.id}`;
            pUserID.innerText = `USER ID: ${data.userId}`;
            pTitle.innerText = `TITLE: ${data.title}`;
            pBody.innerText = `BODY: ${data.body}`;

            document.body.appendChild(pIdentity);
            document.body.appendChild(pUserID);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

        })
        .catch(error => console.error('błąd: ', error));
}

btnPobierz.addEventListener('click', getData);