const HospitalEmployee = (name) => { return {
    name,
    date: null
	}
}

const doug = HospitalEmployee("doug");

console.log(doug.name);

document.getElementById("graph1").innerHTML = "<h1>" + `${doug.name}` + "</h1>";