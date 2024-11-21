function makeTableRow(parentContainer, textContent){
    const tr1 = document.createElement("tr")
  tr1.textContent = textContent
  parentContainer.appendChild(tr1);
}

const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");
  /**
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
   */
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);
  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  const table = document.createElement("table");
  const col1 = document.createElement("td");
  col1.textContent = "Name";
  table.appendChild(col1);
  const col2 = document.createElement("td");
  col2.textContent = "Occupation"
  table.appendChild(col2);
  const col3 = document.createElement("td");
  col3.textContent = "Starting Price"
  table.appendChild(col3);
  rootContainer.appendChild(table)

  // const tr1 = document.createElement("tr")
  // tr1.textContent = "Bob"
  // const tr2 = document.createElement("tr")
  // tr2.textContent = "Emily"
  // const tr3 = document.createElement("tr")
  // tr3.textContent = "Emily"
  // table.append(tr1, tr2, tr3)

  makeTableRow(table, "Alice")
  makeTableRow(table, "Bob")
  makeTableRow(table, "Carol")


  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
}

/**
 * 👉 STEP 4:
 *    Create a function to render the freelancers in our freelancer array
 */
const freelancerList = document.querySelector("#freelancer");
  const freelancerElements = freelancer.map((freelancer) => {
    const freelancerElement = document.createElement("tr");
    freelancerElement.classList.add();
    return freelancerElement;
  });
  freelancerList.replaceChildren(...freelancerElements);

/**
 * 👉 STEP 6:
 *    Create a function to add a new freelancer to the freelancer array
 */

/**
 * 👉 STEP 7:
 *    Add an interval to add a new freelancer every few seconds
 */
const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
  render();

  // TODO: Stop adding shapes if we've reached the maximum number of shapes
}, 3000);
//call init function
init();
