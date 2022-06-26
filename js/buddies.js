const loadBuddies = () => {
     fetch('https://randomuser.me/api/?results=5')
          .then(res => res.json())
          .then(data => displayBuddies(data))
}
loadBuddies();

const displayBuddies = (data) => {
     console.log(data)
     const buddies = data.results;
     const container = document.getElementById('container');
     for (const buddy of buddies) {
          const p = document.createElement('p');
          p.innerText = `
           Name : ${buddy.name.first}
          `
          container.appendChild(p);
     }

}