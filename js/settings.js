(function () {
  const LOCAL_STORAGE_KEY = "wheel-sensitivity";

  const wheelSensitivityEl = document.getElementById("wheel-sensitivity");
  const wheelSensitivityValue = localStorage.getItem(LOCAL_STORAGE_KEY);
  wheelSensitivityEl.value = wheelSensitivityValue;
  console.log("wheelSensitivityValue", wheelSensitivityValue);

  wheelSensitivityEl.addEventListener("change", (e) => {
    console.log("wheelSensitivityEl change", e.target.value);
    localStorage.setItem(LOCAL_STORAGE_KEY, e.target.value);
    location.reload();
  });
})();
