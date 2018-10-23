function hello() {
	alert("Hello World")
}

function hide() {
	document.getElementById("hide").hidden = true
	document.getElementById("seek").hidden = false
}

function seek() {
	document.getElementById("seek").hidden = true
	document.getElementById("hide").hidden = false
}

function isPrime() {
	var value = document.getElementById("ex3Value").value

	if (value <= 1) {
		alert("This number is not prime!")
        return
	}

	for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            alert("This number is not prime!")
            return
        }
    }
    alert("This number is prime!")
}

function submitData() {
	var data = {
		"fullname": document.getElementById("fullname").value,
		"age": document.getElementById("age").value
	}

	axios.post("http://localhost:8081", data)
		.then(function(response) {
			alert(response.data)
		})
		.catch(function(error) {
			alert("Please consider typing coherent infos :)")
		})
}