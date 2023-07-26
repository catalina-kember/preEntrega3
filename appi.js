
const button = document.querySelector("#btninfo");
const apykey = a56d92332634edea0b49f338f976e4c5
const url = 'https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=' + apykey;
button.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((res) => {

            fetch(url)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    articles = data.articles;

                    for (i = 0; i < articles.length; i++) {
                        console.log("Title: " + articles[i]['title']);
                        console.log("Description: " + articles[i]['description']);
            
                        break;
                    }
                });
        })

        .catch((error) => console.log(error));
});