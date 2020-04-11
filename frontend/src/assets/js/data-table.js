function onFormSubmit() {
  var formData = readFormData();
  insertNewRecord(formData);

  resetForm();
}

function readFormData() {
  var formData = {};
  formData["topic"] = document.getElementById("topic").value;
  formData["numOfDecks"] = document.getElementById("numOfDecks").value;
  formData["crud"] = document.getElementById("crud").value;
  return formData;
}

const deleteTopic= (topicId) => {
  let id = {
    id: parseInt(topicId)
  }
  fetch('http://localhost:8080/topics/delete', {
      method: 'DELETE',
      headers: {
          "content-type": "application/json"
      },
      body: JSON.stringify(id)
  })
}

function renderAllTopics(data) {
  var table = document.getElementById("dataTable");
  // .getElementsByTagName("tbody")[0];
  data.forEach((topic) => {
    var newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = topic.title;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = topic.decks.length;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = `<a>Delete</a>`;
    cell3.addEventListener("click", () => {
      deleteTopic(topic.id);
    });
  });
}

const fetchAllTopics = () => {
  fetch("http://localhost:8080/topics")
    .then((results) => results.json())
    .then(renderAllTopics);
};

window.addEventListener("load", () => {
  fetchAllTopics();
});
