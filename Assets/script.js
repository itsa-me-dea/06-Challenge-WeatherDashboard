var options = ['a', 'b', 'c'];

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Coordinates by location name
  // var coordindateAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=' + city + '&limit=1&appid=1da369cd245d58589a61e674c17f6b77';

  // Main Weather API
  // var apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lattitude + '&lon=' + longitude + '&exclude=alerts&units=imperial&appid=1da369cd245d58589a61e674c17f6b77';
  
  // collecting the user input from the search
  // https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
  var search = document.getElementById('search');
  console.log(search);

  search.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      var city = search.value;
      // save user input into local storage
      localStorage.setItem("Search History", city);
      // Add city history to search history
      // var history = document.getElementById('history');
      
      // history.innerHTML = '<option value="' + city + '">' + city + '</option>';
      
    }
  });


// adapted from 22-Stu_Review-Part-One
// var userFormEl = document.querySelector('#user-form');
// var languageButtonsEl = document.querySelector('#language-buttons');
// var nameInputEl = document.querySelector('#username');
// var repoContainerEl = document.querySelector('#repos-container');
// var repoSearchTerm = document.querySelector('#repo-search-term');

// var formSubmitHandler = function (event) {
//   event.preventDefault();

//   var username = nameInputEl.value.trim();

//   if (username) {
//     getRequestedWeather(username);

//     repoContainerEl.textContent = '';
//     nameInputEl.value = '';
//   } else {
//     alert('Please enter a GitHub username');
//   }
// };

// var buttonClickHandler = function (event) {
//   // `event.target` is a reference to the DOM element of what programming language button was clicked on the page
//   var language = event.target.getAttribute('data-language');

//   // If there is no language read from the button, don't attempt to fetch repos
//   if (language) {
//     getFeaturedRepos(language);

//     repoContainerEl.textContent = '';
//   }
// };

// var getRequestedWeather = function (user) {
//   var apiUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=' + lattitude + '&lon=' + longitude + '&exclude=alerts&units=imperial&appid=1da369cd245d58589a61e674c17f6b77';
  

//   fetch(apiUrl)
//     .then(function (response) {
//       if (response.ok) {
//         console.log(response);
//         response.json().then(function (data) {
//           console.log(data);
//           displayRepos(data, user);
//         });
//       } else {
//         alert('Error: ' + response.statusText);
//       }
//     })
//     .catch(function (error) {
//       alert('Unable to connect to GitHub');
//     });
// };

// var getFeaturedRepos = function (language) {
//   // The `q` parameter is what language we want to query, the `+is:featured` flag adds a filter to return only featured repositories
//   // The `sort` parameter will instruct GitHub to respond with all of the repositories in order by the number of issues needing help
//   var apiUrl = 'https://api.github.com/search/repositories?q=' + language + '+is:featured&sort=help-wanted-issues';

//   fetch(apiUrl).then(function (response) {
//     if (response.ok) {
//       response.json().then(function (data) {
//         displayRepos(data.items, language);
//       });
//     } else {
//       alert('Error: ' + response.statusText);
//     }
//   });
// };

// var displayRepos = function (repos, searchTerm) {
//   if (repos.length === 0) {
//     repoContainerEl.textContent = 'No repositories found.';
//     // Without a `return` statement, the rest of this function will continue to run and perhaps throw an error if `repos` is empty
//     return;
//   }

//   repoSearchTerm.textContent = searchTerm;

//   for (var i = 0; i < repos.length; i++) {
//     // The result will be `<github-username>/<github-repository-name>`
//     var repoName = repos[i].owner.login + '/' + repos[i].name;

//     var repoEl = document.createElement('div');
//     repoEl.classList = 'list-item flex-row justify-space-between align-center';

//     var titleEl = document.createElement('span');
//     titleEl.textContent = repoName;

//     repoEl.appendChild(titleEl);

//     var statusEl = document.createElement('span');
//     statusEl.classList = 'flex-row align-center';

//     if (repos[i].open_issues_count > 0) {
//       statusEl.innerHTML =
//         "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
//     } else {
//       statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
//     }

//     repoEl.appendChild(statusEl);

//     repoContainerEl.appendChild(repoEl);
//   }
// };

// userFormEl.addEventListener('submit', formSubmitHandler);
// languageButtonsEl.addEventListener('click', buttonClickHandler);
