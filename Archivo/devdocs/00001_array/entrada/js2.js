// const selectedFile = document.getElementById('input').files[0];

const inputElement = document.getElementById("input");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  const fileList = this.files; /* now you can work with the file list */
  console.log(fileList);
}

console.log('ok');

// https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#using_hidden_file_input_elements_using_the_click()_method