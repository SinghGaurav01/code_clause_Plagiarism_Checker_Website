function checkPlagiarism() {
    var text1 = document.getElementById("text1").value;
    var text2 = document.getElementById("text2").value;
    var result = document.getElementById("result");

    if (text1.trim() === "" || text2.trim() === "") {
      result.innerHTML = "Please enter both texts.";
      return;
    }

    
    var isPlagiarized = (text1 === text2);

    if (isPlagiarized) {
      result.innerHTML = "Plagiarism detected!";
    } else {
      result.innerHTML = "No plagiarism detected.";
    }
  }