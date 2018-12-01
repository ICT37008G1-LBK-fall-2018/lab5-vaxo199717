let phoneModels = document.querySelectorAll(
    "#phone-container > .phone-item > .model"
  );
  
  phoneModels.forEach(model => {
    alert(model.textContent);
  });